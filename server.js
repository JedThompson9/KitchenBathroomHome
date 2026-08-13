require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const { categories } = require('./data/products');
const testimonials = require('./data/testimonials');

const app = express();
const PORT = process.env.PORT || 3000;

const SITE = {
  name: process.env.STORE_NAME || 'KitchenBathroomHome',
  address: process.env.STORE_ADDRESS || '98 Cleveland Street, Stones Corner, QLD 4120',
  email: process.env.STORE_EMAIL || 'anton@chqld.com.au',
  phone: process.env.STORE_PHONE || '(07) 3895 8455',
  mapEmbedSrc:
    'https://www.google.com/maps?q=' +
    encodeURIComponent(process.env.STORE_ADDRESS || '98 Cleveland Street, Stones Corner, QLD 4120') +
    '&output=embed'
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Make site-wide data available to every view.
app.use((req, res, next) => {
  res.locals.site = SITE;
  res.locals.currentPath = req.path;
  res.locals.currentYear = new Date().getFullYear();
  next();
});

app.get('/', (req, res) => {
  const showcase = [
    categories.kitchen.products[1],
    categories.bathroom.products[0],
    categories.home.products[0],
    categories.bathroom.products[2],
    categories.kitchen.products[2],
    categories.home.products[3]
  ];

  res.render('index', {
    title: `${SITE.name} | Kitchen, Bathroom & Home Renovations in Stones Corner`,
    description:
      'KitchenBathroomHome designs and builds stunning kitchens, bathrooms and home spaces in Stones Corner, Brisbane. Bright, modern, and built around you.',
    categories,
    showcase,
    testimonials
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: `About Us | ${SITE.name}`,
    description: `Learn why homeowners across Brisbane trust ${SITE.name} for kitchen, bathroom and home renovations.`
  });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', {
    title: `Gallery | ${SITE.name}`,
    description: 'Browse our kitchen, bathroom and home renovation galleries.',
    categories
  });
});

app.get('/gallery/:category', (req, res, next) => {
  const category = categories[req.params.category];
  if (!category) return next();

  res.render('gallery-category', {
    title: `${category.name} Gallery | ${SITE.name}`,
    description: `Explore our ${category.name.toLowerCase()} renovation gallery.`,
    category,
    categories
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: `Contact Us | ${SITE.name}`,
    description: `Get in touch with ${SITE.name} at ${SITE.address}.`,
    values: {},
    errors: [],
    success: false
  });
});

const contactValidators = [
  body('name').trim().notEmpty().withMessage('Please enter your name.').isLength({ max: 100 }),
  body('email').trim().notEmpty().withMessage('Please enter your email.').isEmail().withMessage('Please enter a valid email address.'),
  body('phone').trim().optional({ checkFalsy: true }).isLength({ max: 30 }).withMessage('Please enter a valid phone number.'),
  body('projectType')
    .trim()
    .notEmpty()
    .withMessage('Please select a project type.')
    .isIn(['kitchen', 'bathroom', 'home', 'other'])
    .withMessage('Please select a valid project type.'),
  body('message').trim().notEmpty().withMessage('Please enter a message.').isLength({ max: 2000 })
];

let mailer = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  mailer = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
}

app.post('/contact', contactValidators, async (req, res) => {
  const result = validationResult(req);
  const { name, email, phone, projectType, message } = req.body;

  if (!result.isEmpty()) {
    return res.status(400).render('contact', {
      title: `Contact Us | ${SITE.name}`,
      description: `Get in touch with ${SITE.name} at ${SITE.address}.`,
      values: { name, email, phone, projectType, message },
      errors: result.array(),
      success: false
    });
  }

  const submission = { name, email, phone, projectType, message, receivedAt: new Date().toISOString() };

  try {
    if (mailer) {
      await mailer.sendMail({
        from: `"${SITE.name} Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO_EMAIL || SITE.email,
        replyTo: email,
        subject: `New enquiry from ${name} (${projectType})`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nProject type: ${projectType}\n\nMessage:\n${message}`
      });
    } else {
      console.log('New contact form submission (SMTP not configured, logging instead):', submission);
    }
  } catch (err) {
    console.error('Failed to send contact email:', err.message);
  }

  res.render('contact', {
    title: `Contact Us | ${SITE.name}`,
    description: `Get in touch with ${SITE.name} at ${SITE.address}.`,
    values: {},
    errors: [],
    success: true
  });
});

app.use((req, res) => {
  res.status(404).render('404', {
    title: `Page Not Found | ${SITE.name}`,
    description: 'The page you are looking for could not be found.'
  });
});

app.listen(PORT, () => {
  console.log(`${SITE.name} website running at http://localhost:${PORT}`);
});
