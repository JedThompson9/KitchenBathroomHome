const { categories } = require('./products');

// Showcase of completed jobs, grouped by room type. Currently reuses the
// product-range imagery as placeholders — swap in real finished-project
// photography here when it's available.
module.exports = [
  {
    title: 'Stones Corner Bathroom Renovation',
    room: 'bathroom',
    location: 'Stones Corner, QLD',
    description: 'A full bathroom strip-out and rebuild around a freestanding soaking tub.',
    image: categories.bathroom.products[0].image
  },
  {
    title: 'Coorparoo Ensuite Refresh',
    room: 'bathroom',
    location: 'Coorparoo, QLD',
    description: 'Frameless glass shower and a warm timber vanity for a bright ensuite.',
    image: categories.bathroom.products[1].image
  },
  {
    title: 'Camp Hill Kitchen Rebuild',
    room: 'kitchen',
    location: 'Camp Hill, QLD',
    description: 'Shaker-style cabinetry, stone benchtops and a family-sized island bench.',
    image: categories.kitchen.products[0].image
  },
  {
    title: 'Greenslopes Kitchen Renovation',
    room: 'kitchen',
    location: 'Greenslopes, QLD',
    description: 'Navy cabinetry with brushed brass hardware and warm timber floors.',
    image: categories.kitchen.products[1].image
  },
  {
    title: 'Holland Park Laundry Fit-out',
    room: 'laundry',
    location: 'Holland Park, QLD',
    description: 'A practical, custom-built laundry with plenty of bench and storage space.',
    image: categories.laundry.products[0].image
  },
  {
    title: 'Morningside Laundry Renovation',
    room: 'laundry',
    location: 'Morningside, QLD',
    description: 'Custom cabinetry solutions that blend everyday storage with style.',
    image: categories.laundry.products[3].image
  }
];
