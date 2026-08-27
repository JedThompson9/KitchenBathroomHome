require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const { categories } = require('./data/products');
const testimonials = require('./data/testimonials');
const { subcategories: bathroomSubcategories } = require('./data/bathroomCatalog');

const app = express();
const PORT = process.env.PORT || 3000;

const SITE = {
  name: process.env.STORE_NAME || 'Bathroom Kitchen Home',
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
    title: `${SITE.name} | Bathroom, Kitchen & Home Renovations in Stones Corner`,
    description:
      'Bathroom Kitchen Home designs and builds stunning bathrooms, kitchens and home spaces in Stones Corner, Brisbane. Bright, modern, and built around you.',
    categories,
    showcase,
    testimonials
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: `About Us | ${SITE.name}`,
    description: `Learn why homeowners across Brisbane trust ${SITE.name} for bathroom, kitchen and home renovations.`
  });
});

app.get('/gallery', (req, res) => {
  res.render('gallery', {
    title: `Gallery | ${SITE.name}`,
    description: 'Browse our bathroom, kitchen and home renovation galleries.',
    categories,
    bathroomSubcategoryCount: bathroomSubcategories.length
  });
});

// Bathrooms get a deeper catalog: subcategory -> supplier -> products -> product detail.
// These are registered ahead of the generic /gallery/:category route so they take
// priority for anything under /gallery/bathroom/...
app.get('/gallery/bathroom', (req, res) => {
  res.render('bathroom-subcategories', {
    title: `Bathrooms Gallery | ${SITE.name}`,
    description: 'Browse bathroom vanities, tapware, basins, baths and more by category.',
    subcategories: bathroomSubcategories,
    category: categories.bathroom
  });
});

app.get('/gallery/bathroom/:subcategory', (req, res, next) => {
  const subcategory = bathroomSubcategories.find((s) => s.slug === req.params.subcategory);
  if (!subcategory) return next();

  res.render('bathroom-suppliers', {
    title: `${subcategory.name} | Bathrooms | ${SITE.name}`,
    description: `Browse ${subcategory.name.toLowerCase()} suppliers and ranges.`,
    subcategory
  });
});

app.get('/gallery/bathroom/:subcategory/:supplier', (req, res, next) => {
  const subcategory = bathroomSubcategories.find((s) => s.slug === req.params.subcategory);
  if (!subcategory) return next();
  const supplier = subcategory.suppliers.find((s) => s.slug === req.params.supplier);
  if (!supplier) return next();

  res.render('bathroom-products', {
    title: `${supplier.name} ${subcategory.name} | ${SITE.name}`,
    description: `${supplier.name} ${subcategory.name.toLowerCase()} range.`,
    subcategory,
    supplier
  });
});

app.get('/gallery/bathroom/:subcategory/:supplier/:product', (req, res, next) => {
  const subcategory = bathroomSubcategories.find((s) => s.slug === req.params.subcategory);
  if (!subcategory) return next();
  const supplier = subcategory.suppliers.find((s) => s.slug === req.params.supplier);
  if (!supplier) return next();
  const product = supplier.products.find((p) => p.slug === req.params.product);
  if (!product) return next();

  // Products with a `variants` list (different sizes/finishes, each with its own code)
  // show a variant-picker grid here instead of a single detail page.
  if (product.variants) {
    return res.render('bathroom-product-variants', {
      title: `${product.name} | ${supplier.name} | ${SITE.name}`,
      description: product.description,
      subcategory,
      supplier,
      product
    });
  }

  res.render('bathroom-product-detail', {
    title: `${product.name} | ${supplier.name} | ${SITE.name}`,
    description: product.description,
    subcategory,
    supplier,
    product
  });
});

app.get('/gallery/bathroom/:subcategory/:supplier/:product/:variant', (req, res, next) => {
  const subcategory = bathroomSubcategories.find((s) => s.slug === req.params.subcategory);
  if (!subcategory) return next();
  const supplier = subcategory.suppliers.find((s) => s.slug === req.params.supplier);
  if (!supplier) return next();
  const product = supplier.products.find((p) => p.slug === req.params.product);
  if (!product || !product.variants) return next();
  const variant = product.variants.find((v) => v.slug === req.params.variant);
  if (!variant) return next();

  res.render('bathroom-variant-detail', {
    title: `${variant.name} | ${supplier.name} | ${SITE.name}`,
    description: variant.details || variant.name,
    subcategory,
    supplier,
    product,
    variant
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

const validProjectTypes = ['bathroom', 'kitchen', 'home', 'other'];

app.get('/contact', (req, res) => {
  const values = {};
  if (req.query.product) {
    values.message = `I'm interested in: ${req.query.product}`;
  }
  if (validProjectTypes.includes(req.query.projectType)) {
    values.projectType = req.query.projectType;
  }

  res.render('contact', {
    title: `Contact Us | ${SITE.name}`,
    description: `Get in touch with ${SITE.name} at ${SITE.address}.`,
    values,
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
