// Bathroom gallery catalog: Subcategory -> Supplier -> Products -> Product detail.
// Otti Australia (https://www.ottiaustralia.com.au/) is a confirmed real supplier and
// covers all 8 categories below, so it's used throughout with their actual collection
// names. Product photos are still placeholder stock imagery pending real product
// photography from Otti (or the store's own supplier photo assets) — swap the `image`
// fields once that's available. Add further suppliers per category by copying the
// pattern used for Otti.

const { img } = require('./products');

// Real Otti Australia product photos, cropped from the supplier's own product grid
// and saved locally at /public/images/products/<subcategory>/<slug>.jpg — replace these
// files with proper high-res exports whenever they're available; the paths below won't
// need to change as long as the filenames stay the same.
function vanityImg(slug) {
  return `/images/products/vanities/${slug}.jpg`;
}
function mirrorImg(slug) {
  return `/images/products/mirrors/${slug}.jpg`;
}

const otti = {
  slug: 'otti-australia',
  name: 'Otti Australia',
  website: 'https://www.ottiaustralia.com.au/',
  logo: '/images/suppliers/otti-australia-logo.png',
  blurb: 'Refined Australian design — a bathroom wholesale supplier with 30+ years of industry experience.'
};

const subcategories = [
  {
    slug: 'vanities',
    name: 'Vanities',
    tagline: 'Floating, freestanding and custom vanity units.',
    image: img('1595515106969-1ce29566ff1c'),
    suppliers: [
      {
        ...otti,
        products: [
          { slug: 'laguna-vanity', name: 'Laguna Vanity', description: 'Part of Otti Australia\'s Laguna vanity collection.', image: vanityImg('laguna-vanity') },
          { slug: 'hampton-mark-ii', name: 'Hampton Mark II', description: 'Part of Otti Australia\'s Hampton Mark II vanity collection.', image: vanityImg('hampton-mark-ii') },
          { slug: 'marlo-wave-board', name: 'Marlo Wave Board', description: 'Part of Otti Australia\'s Marlo Wave Board vanity collection.', image: vanityImg('marlo-wave-board') },
          { slug: 'noosa-wave-board', name: 'Noosa Wave Board', description: 'Part of Otti Australia\'s Noosa Wave Board vanity collection.', image: vanityImg('noosa-wave-board') },
          { slug: 'moonlight', name: 'Moonlight', description: 'Part of Otti Australia\'s Moonlight vanity collection.', image: vanityImg('moonlight') },
          { slug: 'space-saver-vanity', name: 'Space Saver Vanity', description: 'Part of Otti Australia\'s Space Saver vanity collection.', image: vanityImg('space-saver-vanity') },
          { slug: 'tall-boy', name: 'Tall Boy', description: 'Part of Otti Australia\'s Tall Boy vanity collection.', image: vanityImg('tall-boy') },
          { slug: 'boston-bevel-edge', name: 'Boston Bevel Edge', description: 'Part of Otti Australia\'s Boston Bevel Edge vanity collection.', image: vanityImg('boston-bevel-edge') },
          {
            slug: 'bondi-fluted',
            name: 'Bondi Fluted',
            description: 'Part of Otti Australia\'s Bondi Fluted vanity collection.',
            image: vanityImg('bondi-fluted'),
            // Some Otti collections come in multiple sizes/finishes, each with its own
            // product code — when a product has `variants`, its grid card links to a
            // variant-picker grid instead of straight to a detail page. Only one real
            // variant is confirmed so far; add more by copying this shape.
            variants: [
              {
                slug: 'bondi-1500mm-satin-white',
                code: 'BO1500W',
                name: 'Bondi 1500mm Satin White Fluted Wall Hung Curve Vanity',
                image: vanityImg('bondi-1500mm-satin-white-main'),
                // Thumbnail strip below the main image — click any to open the lightbox.
                // First entry is usually the main photo again, rest are dimension/spec
                // diagrams. Add more paths here as they're supplied.
                gallery: [
                  vanityImg('bondi-1500mm-satin-white-main'),
                  vanityImg('bondi-1500mm-satin-white-spec1'),
                  vanityImg('bondi-1500mm-satin-white-spec2')
                ],
                details: 'BONDI SATIN WHITE 1500mm WALL HUNG VANITY',
                specs: [
                  { label: 'Vanity Top', value: 'Cabinet Only' },
                  { label: 'Stone Top Colour', value: 'Not Required' },
                  { label: 'Taphole Option', value: 'Not Required' }
                ],
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '1500mm',
                topOptions: [
                  { name: 'Matte White', color: '#F2EFE9' },
                  { name: 'Pure White', color: '#FFFFFF' },
                  { name: 'Cloudy Carrara', color: '#DAD7D1' },
                  { name: 'Natural Carrara', color: '#EDEBE7' }
                ],
                handleOptions: [
                  { name: 'Matte White', color: '#F2EFE9' },
                  { name: 'Matte Black', color: '#2B2B2B' },
                  { name: 'Gun Metal', color: '#4B4B4E' },
                  { name: 'Brushed Nickel', color: '#B8B4AC' }
                ],
                features: [
                  { label: 'Dimensions', value: '1490 x 450 x 450mm' },
                  { label: 'Mounting', value: 'Wall Hung' },
                  { label: 'Colour', value: 'Matte White' },
                  { label: 'Construction', value: '2 drawers, high moisture resistant plywood, with adjustable internal shelf. (Shelf will require a cutout to be done by tradesmen to allow for waste.)' },
                  { label: 'Interior Finish', value: 'Matte White' },
                  { label: 'Handles', value: 'Bar handle (brushed gold included). Available upgrade to Matte Black or Brushed Nickel, purchased separately.' },
                  { label: 'Drawer Mechanism', value: 'Hettich Runner' },
                  { label: 'Hinges', value: 'Hettich Hinges' },
                  { label: 'Drawer Runner', value: 'Soft Closing' },
                  { label: 'Optional', value: 'Select handles and tops' },
                  { label: 'Extras', value: 'Basins and pop-up wastes are sold separately.' },
                  { label: 'Note', value: 'Should you require a single basin, it is only suitable with a left or right basin setout for this vanity.' },
                  { label: 'Double Basin', value: 'This is standard with this kit.' },
                  { label: 'Single Basin', value: 'This cabinet is only suitable with a left or right setout for single basin. Should you require single basin, please email us your specification and stone top colour with No Holes code — NH.' }
                ]
              },
              {
                slug: 'bondi-750mm-satin-white',
                code: 'BO750W',
                name: 'Bondi 750mm Satin White Fluted Wall Hung Curve Vanity (12TH & NTH Only)',
                image: vanityImg('bondi-750mm-satin-white-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '750mm'
              },
              {
                slug: 'bondi-1800mm-satin-white',
                code: 'BO1800W',
                name: 'Bondi 1800mm Satin White Fluted Wall Hung Curve Vanity',
                image: vanityImg('bondi-1800mm-satin-white-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '1800mm'
              },
              {
                slug: 'bondi-600mm-satin-white',
                code: 'BO600W',
                name: 'Bondi 600mm Satin White Fluted Wall Hung Curve Vanity (12TH & NTH Only)',
                image: vanityImg('bondi-600mm-satin-white-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '600mm'
              },
              {
                slug: 'bondi-900mm-satin-white',
                code: 'BO900W',
                name: 'Bondi 900mm Satin White Fluted Wall Hung Curve Vanity',
                image: vanityImg('bondi-900mm-satin-white-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '900mm'
              },
              {
                slug: 'bondi-1200mm-satin-white',
                code: 'BO1200W',
                name: 'Bondi 1200mm Satin White Fluted Wall Hung Curve Vanity',
                image: vanityImg('bondi-1200mm-satin-white-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '1200mm'
              },
              {
                slug: 'bondi-600mm-woodland-oak',
                code: 'BOW600L',
                name: 'Bondi 600mm Woodland Oak Fluted Curve Vanity (12TH & NTH Only)',
                image: vanityImg('bondi-600mm-woodland-oak-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '600mm'
              },
              {
                slug: 'bondi-750mm-woodland-oak',
                code: 'BOW750L',
                name: 'Bondi 750mm Woodland Oak Fluted Curve Vanity (12TH & NTH Only)',
                image: vanityImg('bondi-750mm-woodland-oak-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '750mm'
              },
              {
                slug: 'bondi-900mm-woodland-oak',
                code: 'BOW900L',
                name: 'Bondi 900mm Woodland Oak Fluted Curve Vanity',
                image: vanityImg('bondi-900mm-woodland-oak-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '900mm'
              },
              {
                slug: 'bondi-1200mm-woodland-oak',
                code: 'BOW1200L',
                name: 'Bondi 1200mm Woodland Oak Fluted Curve Vanity',
                image: vanityImg('bondi-1200mm-woodland-oak-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '1200mm'
              },
              {
                slug: 'bondi-1500mm-woodland-oak',
                code: 'BOW1500L',
                name: 'Bondi 1500mm Woodland Oak Fluted Curve Vanity',
                image: vanityImg('bondi-1500mm-woodland-oak-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '1500mm'
              },
              {
                slug: 'bondi-1800mm-woodland-oak',
                code: 'BOW1800L',
                name: 'Bondi 1800mm Woodland Oak Fluted Curve Vanity',
                image: vanityImg('bondi-1800mm-woodland-oak-main'),
                sizeOptions: ['600mm', '750mm', '900mm', '1200mm', '1500mm', '1800mm'],
                currentSize: '1800mm'
              }
            ]
          },
          { slug: 'bondi-vanity', name: 'Bondi Vanity', description: 'Part of Otti Australia\'s Bondi vanity collection.', image: vanityImg('bondi-vanity') },
          { slug: 'havana-floorstanding-vanity', name: 'Havana Floorstanding Vanity', description: 'Part of Otti Australia\'s Havana Floorstanding vanity collection.', image: vanityImg('havana-floorstanding-vanity') },
          { slug: 'havana-vanity', name: 'Havana Vanity', description: 'Part of Otti Australia\'s Havana vanity collection.', image: vanityImg('havana-vanity') },
          { slug: 'hampshire-vanity', name: 'Hampshire Vanity', description: 'Part of Otti Australia\'s Hampshire vanity collection.', image: vanityImg('hampshire-vanity') },
          { slug: 'byron-fluted', name: 'Byron Fluted', description: 'Part of Otti Australia\'s Byron Fluted vanity collection.', image: vanityImg('byron-fluted') },
          { slug: 'byron-oak', name: 'Byron Oak', description: 'Part of Otti Australia\'s Byron Oak vanity collection.', image: vanityImg('byron-oak') },
          { slug: 'byron-walnut', name: 'Byron Walnut', description: 'Part of Otti Australia\'s Byron Walnut vanity collection.', image: vanityImg('byron-walnut') }
        ]
      }
    ]
  },
  {
    slug: 'shaving-cabinets',
    name: 'Shaving Cabinets',
    tagline: 'Mirrored storage that keeps the bathroom clutter-free.',
    image: img('1585412727061-be62ede56406'),
    suppliers: [
      {
        ...otti,
        products: [
          { slug: 'led-newport-shaving-cabinet', name: 'LED Newport Shaving Cabinet', description: 'Otti Australia\'s LED Newport shaving cabinet, available in Sable Walnut and Woodland Oak finishes.', image: img('1585412727061-be62ede56406') },
          { slug: 'led-bondi-shaving-cabinet', name: 'LED Bondi Shaving Cabinet', description: 'Otti Australia\'s LED Bondi shaving cabinet with built-in lighting.', image: img('1585412727061-be62ede56406') },
          { slug: 'designer-shaving-cabinet', name: 'Designer Shaving Cabinet', description: 'Otti Australia\'s Designer shaving cabinet with adjustable internal shelving.', image: img('1585412727061-be62ede56406') }
        ]
      }
    ]
  },
  {
    slug: 'mirrors',
    name: 'Mirrors',
    tagline: 'Framed, frameless and backlit mirror options.',
    image: mirrorImg('led-mirror-main'),
    suppliers: [
      {
        ...otti,
        products: [
          {
            slug: 'led-mirror',
            name: 'LED Mirror',
            description: 'Otti Australia\'s backlit LED mirror.',
            image: mirrorImg('led-mirror-main'),
            variants: [
              { slug: 'led-archie-900x600-black', code: 'LED-AR9060B', name: 'LED Archie 900(H)x600(W) Black Metal Frame Mirror', image: mirrorImg('led-archie-900x600-black') },
              { slug: 'led-archie-900x600-gold', code: 'LED-AR9060G', name: 'LED Archie 900(H)x600(W) Gold Metal Frame Tuffi Mirror', image: mirrorImg('led-archie-900x600-gold') },
              { slug: 'led-newport-900x450-black-soft-square', code: 'LED-SQM9045B', name: 'LED Newport 900(H)x450(W) Black Metal Frame Tuffi Mirror Soft Square', image: mirrorImg('led-newport-900x450-black-soft-square') },
              { slug: 'led-newport-900x450-gold-soft-square', code: 'LED-SQM9045G', name: 'LED Newport 900(H)x450(W) Gold Metal Frame Tuffi Mirror Soft Square', image: mirrorImg('led-newport-900x450-gold-soft-square') },
              { slug: 'led-bondi-800mm-frameless', code: 'LED-R800N', name: 'LED Bondi 800mm Frameless Tuffi Mirror', image: mirrorImg('led-bondi-800mm-frameless') },
              { slug: 'led-noosa-900x450-frameless', code: 'LED-OV9045N', name: 'LED Noosa 900(H)x450(W) Frameless Tuffi Mirror', image: mirrorImg('led-noosa-900x450-frameless') },
              { slug: 'led-noosa-900x450-gold-metal-frame', code: 'LED-MF9045G-N', name: 'LED Noosa 900(H)x450(W) Gold Metal Frame Tuffi Mirror', image: mirrorImg('led-noosa-900x450-gold-metal-frame') },
              { slug: 'led-noosa-900x450-black-metal-frame', code: 'LED-MF9045B-N', name: 'LED Noosa 900(H)x450(W) Black Metal Frame Tuffi Mirror', image: mirrorImg('led-noosa-900x450-black-metal-frame') }
            ]
          },
          {
            slug: 'metal-frame-mirror',
            name: 'Metal Frame Mirror',
            description: 'Otti Australia\'s framed mirror in a range of metal finishes.',
            image: mirrorImg('metal-frame-mirror-main'),
            variants: [
              { slug: 'archie-900x600-black', code: 'MFMAR9060B-N', name: 'Archie 900(H)x600(W) Black Metal Framed Tuffi Mirror', image: mirrorImg('archie-900x600-black') },
              { slug: 'archie-900x600-gold', code: 'MFMAR9060G-N', name: 'Archie 900(H)x600(W) Gold Metal Framed Tuffi Mirror', image: mirrorImg('archie-900x600-gold') },
              { slug: 'archie-900x600-white', code: 'MFMAR9060W', name: 'Archie 900(H)x600(W) White Metal Framed Tuffi Mirror', image: mirrorImg('archie-900x600-white') },
              { slug: 'noosa-900x450-black', code: 'MFMO9045B-N', name: 'Noosa 900(H)x450(W) Black Metal Frame Tuffi Mirror', image: mirrorImg('noosa-900x450-black') },
              { slug: 'noosa-900x450-gold', code: 'MFMO9045G-N', name: 'Noosa 900(H)x450(W) Gold Metal Frame Tuffi Mirror', image: mirrorImg('noosa-900x450-gold') },
              { slug: 'noosa-1200x600-gold', code: 'MFMO1260G-N', name: 'Noosa 1200(W)x600(H) Gold Metal Frame Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('noosa-1200x600-gold') },
              { slug: 'noosa-1200x600-black', code: 'MFMO1260B-N', name: 'Noosa 1200(W)x600(H) Black Metal Frame Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('noosa-1200x600-black') },
              { slug: 'london-700mm-white', code: 'MFM700W', name: 'London 700mm White Metal Frame Tuffi Mirror', image: mirrorImg('london-700mm-white') },
              { slug: 'noosa-900x450-white', code: 'MFMO9045W', name: 'Noosa 900(H)x450(W) White Metal Frame Tuffi Mirror', image: mirrorImg('noosa-900x450-white') },
              { slug: 'noosa-1200x600-white', code: 'MFMO1260W', name: 'Noosa 1200(W)x600(H) White Metal Frame Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('noosa-1200x600-white') },
              { slug: 'london-700mm-gold', code: 'MFM700G-N', name: 'London 700mm Gold Metal Frame Tuffi Mirror', image: mirrorImg('london-700mm-gold') },
              { slug: 'london-700mm-black', code: 'MFM700B-N', name: 'London 700mm Black Metal Frame Tuffi Mirror', image: mirrorImg('london-700mm-black') }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'basins',
    name: 'Basins',
    tagline: 'Above-counter, inset and wall-hung basins.',
    image: img('1552321554-5fefe8c9ef14'),
    suppliers: [
      {
        ...otti,
        products: [
          { slug: 'fluted-basin', name: 'Fluted Basin', description: 'Otti Australia\'s fluted-texture basin.', image: img('1552321554-5fefe8c9ef14') },
          { slug: 'concrete-basin', name: 'Concrete Basin', description: 'Otti Australia\'s raw concrete-finish basin.', image: img('1552321554-5fefe8c9ef14') },
          { slug: 'solid-surface-basin', name: 'Solid Surface Basin', description: 'Otti Australia\'s solid surface basin.', image: img('1552321554-5fefe8c9ef14') }
        ]
      }
    ]
  },
  {
    slug: 'handles',
    name: 'Handles',
    tagline: 'Cabinet and drawer hardware in every finish.',
    image: img('1586336049238-c3f97b6af323'),
    suppliers: [
      {
        ...otti,
        products: [
          { slug: 'chloe-handle', name: 'Chloe Handle', description: 'Otti Australia\'s Chloe handle.', image: img('1586336049238-c3f97b6af323') },
          { slug: 'newport-handle', name: 'Newport Handle', description: 'Otti Australia\'s Newport handle.', image: img('1586336049238-c3f97b6af323') },
          { slug: 'heirloom-handle', name: 'Heirloom Handle', description: 'Otti Australia\'s Heirloom handle.', image: img('1586336049238-c3f97b6af323') },
          { slug: 'astor-handle', name: 'Astor Handle', description: 'Otti Australia\'s Astor handle.', image: img('1586336049238-c3f97b6af323') }
        ]
      }
    ]
  },
  {
    slug: 'tapware',
    name: 'Tapware',
    tagline: 'Basin mixers, showers and bath tapware.',
    image: img('1613849925387-6e7f31f0cf40'),
    suppliers: [
      {
        ...otti,
        products: [
          { slug: 'oskar-series', name: 'Oskar Series', description: 'Otti Australia\'s Oskar series tapware.', image: img('1613849925387-6e7f31f0cf40') },
          { slug: 'vetto-series', name: 'Vetto Series', description: 'Otti Australia\'s Vetto series tapware.', image: img('1564518823660-8dc28fa58f21') },
          { slug: 'roul-series', name: 'Roul Series', description: 'Otti Australia\'s Roul series tapware.', image: img('1613849925387-6e7f31f0cf40') }
        ]
      }
    ]
  },
  {
    slug: 'baths',
    name: 'Baths',
    tagline: 'Freestanding, inset and back-to-wall baths.',
    image: img('1620626011761-996317b8d101'),
    suppliers: [
      {
        ...otti,
        products: [
          { slug: 'attica-havana-bath', name: 'Attica Havana Bath', description: 'Otti Australia\'s Attica Havana bath.', image: img('1620626011761-996317b8d101') },
          { slug: 'attica-celine-bath', name: 'Attica Celine Bath', description: 'Otti Australia\'s Attica Celine bath, available in Matte White and fluted finishes.', image: img('1584622650111-993a426fbf0a') }
        ]
      }
    ]
  },
  {
    slug: 'toilets',
    name: 'Toilets',
    tagline: 'Wall-faced, back-to-wall and close-coupled suites.',
    image: img('1587527901949-ab0341697c1e'),
    suppliers: [
      {
        ...otti,
        products: [
          { slug: 'wall-face-pan', name: 'Wall Face Pan', description: 'Otti Australia\'s wall face pan.', image: img('1587527901949-ab0341697c1e') },
          { slug: 'inwall-cistern-and-plate', name: 'Inwall Cistern & Plate', description: 'Otti Australia\'s R&T inwall cistern and flush plate.', image: img('1589824783837-6169889fa20f') }
        ]
      }
    ]
  }
];

module.exports = { subcategories };
