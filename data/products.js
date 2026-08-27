// Curated image bank (verified, licensed for free use).
// Helper builds a right-sized, compressed Unsplash URL from a photo id.
function img(id, w = 1200) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
}

const categories = {
  bathroom: {
    slug: 'bathroom',
    name: 'Bathrooms',
    tagline: 'Everyday spaces that feel like a retreat.',
    heroImage: img('1620626011761-996317b8d101', 1600),
    products: [
      {
        name: 'Freestanding Spa Bath',
        description: 'A bright, airy bathroom built around a freestanding soaking tub.',
        image: img('1620626011761-996317b8d101')
      },
      {
        name: 'Walk-in Shower & Timber Vanity',
        description: 'Frameless glass shower paired with a warm timber vanity.',
        image: img('1584622650111-993a426fbf0a')
      },
      {
        name: 'Floating Oak Vanity',
        description: 'Wall-hung vanity with soft-close drawers and integrated storage.',
        image: img('1595515106969-1ce29566ff1c')
      },
      {
        name: 'Classic Monochrome Bathroom',
        description: 'Timeless checkerboard floor tiles with crisp white fittings.',
        image: img('1552321554-5fefe8c9ef14')
      }
    ]
  },
  kitchen: {
    slug: 'kitchen',
    name: 'Kitchens',
    tagline: 'Where good food and great memories are made.',
    heroImage: img('1600489000022-c2086d79f9d4', 1600),
    products: [
      {
        name: 'Coastal White Island Kitchen',
        description: 'Shaker-style cabinetry, stone benchtops and a family-sized island bench.',
        image: img('1556909212-d5b604d0c90d')
      },
      {
        name: 'Midnight Navy Shaker Kitchen',
        description: 'Navy cabinetry with brushed brass hardware and warm timber floors.',
        image: img('1600489000022-c2086d79f9d4')
      },
      {
        name: 'Entertainer’s Island Bench',
        description: 'A statement island with bar seating, pendant lighting and gloss finishes.',
        image: img('1556912167-f556f1f39fdf')
      },
      {
        name: 'Everyday Family Kitchen',
        description: 'Practical, beautiful and built to handle busy family life.',
        image: img('1556911220-e15b29be8c8f')
      }
    ]
  },
  home: {
    slug: 'home',
    name: 'Home',
    tagline: 'Considered living and dining spaces for the whole house.',
    heroImage: img('1583847268964-b28dc8f51f92', 1600),
    products: [
      {
        name: 'Modern Living Room Fit-out',
        description: 'Custom joinery and soft furnishings for relaxed everyday living.',
        image: img('1493809842364-78817add7ffb')
      },
      {
        name: 'Boho Living Styling',
        description: 'Warm textures, timber accents and layered natural light.',
        image: img('1615529182904-14819c35db37')
      },
      {
        name: 'Minimalist Lounge Setting',
        description: 'A calm, uncluttered space designed around comfort.',
        image: img('1583847268964-b28dc8f51f92')
      },
      {
        name: 'Statement Storage Cabinetry',
        description: 'Custom cabinetry solutions that blend storage with style.',
        image: img('1585128792020-803d29415281')
      },
      {
        name: 'Warm Bedroom Retreat',
        description: 'Considered bedroom design with custom joinery and soft lighting.',
        image: img('1556020685-ae41abfc9365')
      },
      {
        name: 'Designer Living Corner',
        description: 'Statement furniture and cabinetry for a welcoming home.',
        image: img('1618220179428-22790b461013')
      }
    ]
  }
};

module.exports = { categories, img };
