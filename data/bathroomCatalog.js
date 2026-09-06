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
              { slug: 'led-noosa-900x450-black-metal-frame', code: 'LED-MF9045B-N', name: 'LED Noosa 900(H)x450(W) Black Metal Frame Tuffi Mirror', image: mirrorImg('led-noosa-900x450-black-metal-frame') },
              { slug: 'led-noosa-900x600-black-metal-frame', code: 'LED-OVM9060B', name: 'LED Noosa 900(H)x600(W) Black Metal Frame Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-900x600-black-metal-frame') },
              { slug: 'led-noosa-900x600-white-metal-frame', code: 'LED-OVM9060W', name: 'LED Noosa 900(H)x600(W) White Metal Frame Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-900x600-white-metal-frame') },
              { slug: 'led-archie-900x600-white', code: 'LED-AR9060W', name: 'LED Archie 900(H)x600(W) White Metal Frame Tuffi Mirror', image: mirrorImg('led-archie-900x600-white') },
              { slug: 'led-noosa-900x600-frameless', code: 'LED-OV9060', name: 'LED Noosa 900(H)x600(W) Frameless Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-900x600-frameless') },
              { slug: 'led-noosa-900x450-white-metal-frame', code: 'LED-MF9045W-N', name: 'LED Noosa 900(H)x450(W) White Metal Frame Tuffi Mirror', image: mirrorImg('led-noosa-900x450-white-metal-frame') },
              { slug: 'led-bondi-800mm-black', code: 'LED-R800B', name: 'LED Bondi 800mm Black Metal Frame Tuffi Mirror', image: mirrorImg('led-bondi-800mm-black') },
              { slug: 'led-bondi-800mm-white', code: 'LED-R800W', name: 'LED Bondi 800mm White Metal Frame Tuffi Mirror', image: mirrorImg('led-bondi-800mm-white') },
              { slug: 'led-noosa-1200x750-frameless', code: 'LED-OV1275', name: 'LED Noosa 1200(W)x750(H) Frameless Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-1200x750-frameless') },
              { slug: 'led-noosa-1200x750-black-metal-frame', code: 'LED-OVM1275B', name: 'LED Noosa 1200(W)x750(H) Black Metal Frame Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-1200x750-black-metal-frame') },
              { slug: 'led-noosa-1200x750-white-metal-frame', code: 'LED-OVM1275W', name: 'LED Noosa 1200(W)x750(H) White Metal Frame Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-1200x750-white-metal-frame') },
              { slug: 'led-noosa-1500x750-frameless', code: 'LED-OV1575', name: 'LED Noosa 1500(W)x750(H) Frameless Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-1500x750-frameless') },
              { slug: 'led-noosa-1500x750-black-metal-frame', code: 'LED-OVM1575B', name: 'LED Noosa 1500(W)x750(H) Black Metal Frame Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-1500x750-black-metal-frame') },
              { slug: 'led-noosa-1500x750-white-metal-frame', code: 'LED-OVM1575W', name: 'LED Noosa 1500(W)x750(H) White Metal Frame Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-1500x750-white-metal-frame') },
              { slug: 'led-noosa-1800x750-frameless', code: 'LED-OV1875', name: 'LED Noosa 1800(W)x750(H) Frameless Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-1800x750-frameless') },
              { slug: 'led-noosa-1200x750-gold-metal-frame', code: 'LED-OVM1275G', name: 'LED Noosa 1200(W)x750(H) Gold Metal Frame Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-1200x750-gold-metal-frame') },
              { slug: 'led-noosa-1500x750-gold-metal-frame', code: 'LED-OVM1575G', name: 'LED Noosa 1500(W)x750(H) Gold Metal Frame Tuffi Mirror — Install Horizontal or Vertical', image: mirrorImg('led-noosa-1500x750-gold-metal-frame') }
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
    image: '/images/products/basins/artis-oval-basins.jpg',
    suppliers: [
      {
        ...otti,
        products: [
          {
            slug: 'artis-oval-basins',
            name: 'Artis Oval Basins',
            description: 'Otti Australia\'s Artis Oval basin range.',
            image: '/images/products/basins/artis-oval-basins.jpg',
            variants: [
              { slug: 'artis98-oval', code: 'IS4098', name: 'Artis 98 465x375x120 Oval Basin', image: '/images/products/basins/artis98-oval.jpg' },
              { slug: 'artis-o96-matte-black', code: 'IS4096MB', name: 'Artis O\'96 455x325x135 Matte Black Oval Basin Ultra Slim', image: '/images/products/basins/artis-o96-matte-black.jpg' },
              { slug: 'artis-oval-400', code: 'IS4400', name: 'Artis Oval 400x345x145 Basin', image: '/images/products/basins/artis-oval-400.jpg' },
              { slug: 'artis-o96-gloss-white', code: 'IS4096', name: 'Artis O\'96 455x325x135 Gloss White Oval Basin Ultra Slim', image: '/images/products/basins/artis-o96-gloss-white.jpg' },
              { slug: 'artis-square-gloss-white', code: 'IS5094', name: 'Artis Square 500x395x140 Gloss White Basin', image: '/images/products/basins/artis-square-gloss-white.jpg' },
              { slug: 'artis-o96-matte-black-gloss-white', code: 'IS4096MWB', name: 'Artis O\'96 455x325x135 Matte Black & Gloss White Oval Basin Ultra Slim', image: '/images/products/basins/artis-o96-matte-black-gloss-white.jpg' },
              { slug: 'artis-square-matte-black-white', code: 'IS5094MWB', name: 'Artis Square 500x395x140 Matte Black & Matte White Basin', image: '/images/products/basins/artis-square-matte-black-white.jpg' },
              { slug: 'artis-o96-matte-white', code: 'IS4096MW', name: 'Artis O\'96 455x325x135 Matte White Oval Basin Ultra Slim', image: '/images/products/basins/artis-o96-matte-white.jpg' },
              { slug: 'quay-oval-gloss-white', code: 'OT5035', name: 'Quay Oval 500x330x120 Gloss White Basin', image: '/images/products/basins/quay-oval-gloss-white.jpg' },
              { slug: 'quay-oval-matte-white', code: 'OT5035MW', name: 'Quay Oval 500x330x120 Matte White Basin', image: '/images/products/basins/quay-oval-matte-white.jpg' },
              { slug: 'quay-oval-matte-black', code: 'OT5035MB', name: 'Quay Oval 500x330x120 Matte Black Basin', image: '/images/products/basins/quay-oval-matte-black.jpg' },
              { slug: 'quay-oval-matte-black-gloss-white', code: 'OT5035MBW', name: 'Quay Oval 500x330x120 Matte Black & Gloss White Basin', image: '/images/products/basins/quay-oval-matte-black-gloss-white.jpg' },
              { slug: 'quay-oval-matte-grey', code: 'OT5035MG', name: 'Quay Oval 500x330x120 Matte Grey Basin', image: '/images/products/basins/quay-oval-matte-grey.jpg' },
              { slug: 'quay-oval-matte-carrara', code: 'OT5035MCAR', name: 'Quay Oval 500x330x120 Matte Carrara Basin', image: '/images/products/basins/quay-oval-matte-carrara.jpg' },
              { slug: 'quay-oval-gloss-carrara', code: 'OT5035CAR', name: 'Quay Oval 500x330x120 Gloss Carrara Basin', image: '/images/products/basins/quay-oval-gloss-carrara.jpg' },
              { slug: 'bronte-oval-gloss-white', code: 'OT5036', name: 'Bronte Oval 500x350x130 Gloss White Basin', image: '/images/products/basins/bronte-oval-gloss-white.jpg' },
              { slug: 'bronte-oval-matte-black', code: 'OT5036MB', name: 'Bronte Oval 500x350x130 Matte Black Basin', image: '/images/products/basins/bronte-oval-matte-black.jpg' },
              { slug: 'bronte-oval-matte-white', code: 'OT5036MW', name: 'Bronte Oval 500x350x130 Matte White Basin', image: '/images/products/basins/bronte-oval-matte-white.jpg' },
              { slug: 'bronte-oval-carrara', code: 'OT5036MCAR', name: 'Bronte Oval 500x350x130 Carrara Basin', image: '/images/products/basins/bronte-oval-carrara.jpg' }
            ]
          },
          {
            slug: 'lifestyle-color-basins',
            name: 'Life Style Color Basins',
            description: 'Otti Australia\'s Life Style Color basin range.',
            image: '/images/products/basins/lifestyle-color-basins.jpg',
            variants: [
              { slug: 'artis88-gloss-white', code: 'IS4088', name: 'Artis 88 355x355x120 Gloss White Basin', image: '/images/products/basins/artis88-gloss-white.jpg' },
              { slug: 'artis88-matte-white', code: 'IS4088MW', name: 'Artis 88 355x355x120 Matte White Basin', image: '/images/products/basins/artis88-matte-white.jpg' },
              { slug: 'bondi-matte-white', code: 'IS4030MW', name: 'Bondi 400x400x135 Matte White Basin', image: '/images/products/basins/bondi-matte-white.jpg' },
              { slug: 'bondi-gloss-white', code: 'IS4030', name: 'Bondi 400x400x135 Gloss White Basin', image: '/images/products/basins/bondi-gloss-white.jpg' },
              { slug: 'artis88-matte-black', code: 'IS4088MB', name: 'Artis 88 355x355x120 Matte Black Basin', image: '/images/products/basins/artis88-matte-black.jpg' },
              { slug: 'golfball-white', code: 'IS4087', name: 'Golf Ball 355x355x120 White Basin', image: '/images/products/basins/golfball-white.jpg' },
              { slug: 'starz-round-black', code: 'IS5182B', name: 'Starz Round 400x400x140 Black Basin', image: '/images/products/basins/starz-round-black.jpg' },
              { slug: 'golfball-gold', code: 'IS5201', name: 'Golf Ball 430x430x145 Gold Basin', image: '/images/products/basins/golfball-gold.jpg' },
              { slug: 'bondi-matte-grey', code: 'IS4030MG', name: 'Bondi 400x400x135 Matte Grey Basin', image: '/images/products/basins/bondi-matte-grey.jpg' },
              { slug: 'artis88-matte-black-white', code: 'IS4088MWB', name: 'Artis 88 355x355x120 Matte Black & Matte White Basin', image: '/images/products/basins/artis88-matte-black-white.jpg' },
              { slug: 'artis88-matte-white-straight-edge', code: 'IS4089MW', name: 'Artis 88 355x355x120 Matte White With Straight Edge Basin', image: '/images/products/basins/artis88-matte-white-straight-edge.jpg' },
              { slug: 'radius-round-carrara', code: 'OT3600MCAR', name: 'Radius Round 360x360x115 Carrara Basin', image: '/images/products/basins/radius-round-carrara.jpg' },
              { slug: 'bronte-round-360-gloss-white', code: 'OT3636', name: 'Bronte Round 360x360x130 Gloss White Basin', image: '/images/products/basins/bronte-round-360-gloss-white.jpg' },
              { slug: 'bronte-round-360-matte-white', code: 'OT3636MW', name: 'Bronte Round 360x360x130 Matte White Basin', image: '/images/products/basins/bronte-round-360-matte-white.jpg' },
              { slug: 'bronte-round-360-matte-black', code: 'OT3636MB', name: 'Bronte Round 360x360x130 Matte Black Basin', image: '/images/products/basins/bronte-round-360-matte-black.jpg' },
              { slug: 'bronte-round-390-gloss-white', code: 'OT3939', name: 'Bronte Round 390x390x130 Gloss White Basin', image: '/images/products/basins/bronte-round-390-gloss-white.jpg' },
              { slug: 'bronte-round-390-matte-white', code: 'OT3939MW', name: 'Bronte Round 390x390x130 Matte White Basin', image: '/images/products/basins/bronte-round-390-matte-white.jpg' },
              { slug: 'radius-round-gun-metal', code: 'OT3600GM', name: 'Radius Round 360x360x115 Gun Metal Basin', image: '/images/products/basins/radius-round-gun-metal.jpg' },
              { slug: 'chloe-gloss-white', code: 'OT3655', name: 'Chloe 360x360x125 Gloss White Basin', image: '/images/products/basins/chloe-gloss-white.jpg' },
              { slug: 'chloe-matte-white', code: 'OT3655MW', name: 'Chloe 360x360x125 Matte White Basin', image: '/images/products/basins/chloe-matte-white.jpg' },
              { slug: 'laguna-360-gloss-white', code: 'OT3650', name: 'Laguna 360x360x120 Gloss White Basin', image: '/images/products/basins/laguna-360-gloss-white.jpg' },
              { slug: 'laguna-360-matte-white', code: 'OT3650MW', name: 'Laguna 360x360x120 Matte White Basin', image: '/images/products/basins/laguna-360-matte-white.jpg' },
              { slug: 'laguna-415-gloss-white', code: 'OT4150', name: 'Laguna 415x415x120 Gloss White Basin', image: '/images/products/basins/laguna-415-gloss-white.jpg' },
              { slug: 'laguna-415-matte-white', code: 'OT4150MW', name: 'Laguna 415x415x120 Matte White Basin', image: '/images/products/basins/laguna-415-matte-white.jpg' }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'handles',
    name: 'Handles',
    tagline: 'Cabinet and drawer hardware in every finish.',
    image: '/images/products/handles/hampshire-handle.jpg',
    suppliers: [
      {
        ...otti,
        products: [
          {
            slug: 'hampshire-handle',
            name: 'Hampshire Handle',
            description: 'Otti Australia\'s Hampshire handle.',
            image: '/images/products/handles/hampshire-handle.jpg',
            variants: [
              { slug: 'hampshire-120-brushed-gold', code: 'HSHANDLE-G', name: 'Hampshire 120mm Brushed Gold Handle for 600mm Cabinet', image: '/images/products/handles/hampshire-120-brushed-gold.jpg' },
              { slug: 'hampshire-200-brushed-gold', code: 'HSHANDLE-G200', name: 'Hampshire 200mm Brushed Gold Handle for 750, 900, 1200, 1500, 1800 Cabinets', image: '/images/products/handles/hampshire-200-brushed-gold.jpg' },
              { slug: 'hampshire-200-matte-black', code: 'HSHANDLE-B200', name: 'Hampshire 200mm Matte Black Handle for 750, 900, 1200, 1500, 1800 Cabinets', image: '/images/products/handles/hampshire-200-matte-black.jpg' },
              { slug: 'hampshire-120-matte-black', code: 'HSHANDLE-B', name: 'Hampshire 120mm Matte Black Handle for 600mm Cabinet', image: '/images/products/handles/hampshire-120-matte-black.jpg' },
              { slug: 'hampshire-120-white', code: 'HSHANDLE-W', name: 'Hampshire 120mm White Handle for 600mm Cabinet', image: '/images/products/handles/hampshire-120-white.jpg' },
              { slug: 'hampshire-200-white', code: 'HSHANDLE-W200', name: 'Hampshire 200mm White Handle for 750, 900, 1200, 1500, 1800 Cabinets', image: '/images/products/handles/hampshire-200-white.jpg' },
              { slug: 'hampshire-120-gun-metal', code: 'HSHANDLE-GM', name: 'Hampshire 120mm Gun Metal Handle for 600mm Cabinet', image: '/images/products/handles/hampshire-120-gun-metal.jpg' },
              { slug: 'hampshire-200-gun-metal', code: 'HSHANDLE-GM200', name: 'Hampshire 200mm Gun Metal Handle for 750, 900, 1200, 1500, 1800 Cabinets', image: '/images/products/handles/hampshire-200-gun-metal.jpg' },
              { slug: 'hampshire-120-brushed-nickel', code: 'HSHANDLE-BN', name: 'Hampshire 120mm Brushed Nickel Handle for 600mm Cabinet', image: '/images/products/handles/hampshire-120-brushed-nickel.jpg' },
              { slug: 'hampshire-200-brushed-nickel', code: 'HSHANDLE-BN200', name: 'Hampshire 200mm Brushed Nickel Handle for 750, 900, 1200, 1500, 1800 Cabinets', image: '/images/products/handles/hampshire-200-brushed-nickel.jpg' },
              { slug: 'hampshire-80-matte-black', code: 'HSHANDLE-B80', name: 'Hampshire 80mm Matte Black Handle for 600mm Cabinet', image: '/images/products/handles/hampshire-80-matte-black.jpg' },
              { slug: 'hampshire-80-brushed-gold', code: 'HSHANDLE-G80', name: 'Hampshire 80mm Brushed Gold Handle for 600mm Cabinet', image: '/images/products/handles/hampshire-80-brushed-gold.jpg' },
              { slug: 'hampshire-80-gun-metal', code: 'HSHANDLE-GM80', name: 'Hampshire 80mm Gun Metal Handle for 600mm Cabinet', image: '/images/products/handles/hampshire-80-gun-metal.jpg' },
              { slug: 'hampshire-80-brushed-nickel', code: 'HSHANDLE-BN80', name: 'Hampshire 80mm Brushed Nickel Handle for 600mm Cabinet', image: '/images/products/handles/hampshire-80-brushed-nickel.jpg' }
            ]
          }
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
    image: '/images/products/baths/attica-bath.jpg',
    suppliers: [
      {
        ...otti,
        products: [
          {
            slug: 'attica-kensington',
            name: 'Attica Kensington',
            description: 'Otti Australia\'s Kensington bath range.',
            image: '/images/products/baths/attica-kensington-1500-gloss-white.jpg',
            variants: [
              { slug: 'attica-kensington-1500-gloss-white', code: 'AKBT-1500', name: 'Attica Kensington 1500 Gloss White Bath', image: '/images/products/baths/attica-kensington-1500-gloss-white.jpg' },
              { slug: 'attica-kensington-1500-matte-white', code: 'AKBT-1500-MW', name: 'Attica Kensington 1500 Matte White Bath', image: '/images/products/baths/attica-kensington-1500-matte-white.jpg' },
              { slug: 'attica-kensington-1700-matte-white', code: 'AKBT-1700-MW', name: 'Attica Kensington 1700 Matte White Bath', image: '/images/products/baths/attica-kensington-1700-matte-white.jpg' }
            ]
          },
          {
            slug: 'attica-noosa-fluted',
            name: 'Attica Noosa Fluted',
            description: 'Otti Australia\'s Noosa Fluted bath range.',
            image: '/images/products/baths/attica-noosa-fluted-1700-gloss-white-btw.jpg',
            variants: [
              { slug: 'attica-noosa-fluted-1700-gloss-white-btw', code: 'ANBT-BW-1700', name: 'Attica Noosa Fluted 1700 Gloss White BTW Multi-fit Bath', image: '/images/products/baths/attica-noosa-fluted-1700-gloss-white-btw.jpg' },
              { slug: 'attica-noosa-fluted-1700-gloss-white', code: 'ANBT-1700', name: 'Attica Noosa Fluted 1700 Gloss White Bath', image: '/images/products/baths/attica-noosa-fluted-1700-gloss-white.jpg' },
              { slug: 'attica-noosa-fluted-1700-matte-white', code: 'ANBT-1700-MW', name: 'Attica Noosa Fluted 1700 Matte White Bath', image: '/images/products/baths/attica-noosa-fluted-1700-matte-white.jpg' },
              { slug: 'attica-noosa-fluted-1500-matte-white-btw-overflow', code: 'ANBT-BW-1500-MW-OF', name: 'Attica Noosa Fluted 1500 Matte White BTW Multi-fit Bath with Overflow', image: '/images/products/baths/attica-noosa-fluted-1500-matte-white-btw-overflow.jpg' },
              { slug: 'attica-noosa-fluted-1500-gloss-white-btw-overflow', code: 'ANBT-BW-1500-OF', name: 'Attica Noosa Fluted 1500 Gloss White BTW Multi-fit Bath with Overflow', image: '/images/products/baths/attica-noosa-fluted-1500-gloss-white-btw-overflow.jpg' }
            ]
          },
          {
            slug: 'attica-bondi',
            name: 'Attica Bondi',
            description: 'Otti Australia\'s Bondi bath range.',
            image: '/images/products/baths/attica-bondi-1700-matte-white-overflow.jpg',
            variants: [
              { slug: 'attica-bondi-1700-matte-white-overflow', code: 'ABBT-1700-MW-OF', name: 'Attica Bondi 1700 Matte White Bath with Overflow', image: '/images/products/baths/attica-bondi-1700-matte-white-overflow.jpg' },
              { slug: 'attica-bondi-1500-matte-white-overflow', code: 'ABBT-1500-MW-OF', name: 'Attica Bondi 1500 Matte White Bath with Overflow', image: '/images/products/baths/attica-bondi-1500-matte-white-overflow.jpg' }
            ]
          },
          {
            slug: 'hampton',
            name: 'Hampton',
            description: 'Otti Australia\'s Hampton bath range.',
            image: '/images/products/baths/hampton-1500x750x560-gloss-white-of.jpg',
            variants: [
              { slug: 'hampton-1500x750x560-gloss-white-of', code: 'OCBT-1500-OF', name: 'Hampton 1500x750x560 Gloss White Bathtub OF', image: '/images/products/baths/hampton-1500x750x560-gloss-white-of.jpg' },
              { slug: 'hampton-1700x800x560-gloss-white-of', code: 'OCBT-1700-OF', name: 'Hampton 1700x800x560 Gloss White Bathtub OF', image: '/images/products/baths/hampton-1700x800x560-gloss-white-of.jpg' }
            ]
          },
          {
            slug: 'attica-manolo',
            name: 'Attica Manolo',
            description: 'Otti Australia\'s Manolo bath range.',
            image: '/images/products/baths/attica-manolo-1530-gloss-white-overflow.jpg',
            variants: [
              { slug: 'attica-manolo-1530-gloss-white-overflow', code: 'AMBT-1500-OF', name: 'Attica Manolo 1530 Gloss White Bath with Overflow', image: '/images/products/baths/attica-manolo-1530-gloss-white-overflow.jpg' },
              { slug: 'attica-manolo-1530-matte-white-overflow', code: 'AMBT-1500MW-OF', name: 'Attica Manolo 1530 Matte White Bath with Overflow', image: '/images/products/baths/attica-manolo-1530-matte-white-overflow.jpg' },
              { slug: 'attica-manolo-1700-matte-white-overflow', code: 'AMBT-1700MW-OF', name: 'Attica Manolo 1700 Matte White Bath with Overflow', image: '/images/products/baths/attica-manolo-1700-matte-white-overflow.jpg' },
              { slug: 'attica-manolo-1700-gloss-white-overflow', code: 'AMBT-1700-OF', name: 'Attica Manolo 1700 Gloss White Bath with Overflow', image: '/images/products/baths/attica-manolo-1700-gloss-white-overflow.jpg' },
              { slug: 'attica-manolo-1300-gloss-white-overflow', code: 'AMBT-1300-OF', name: 'Attica Manolo 1300 Gloss White Bath with Overflow', image: '/images/products/baths/attica-manolo-1300-gloss-white-overflow.jpg' },
              { slug: 'attica-manolo-1400-gloss-white-overflow', code: 'AMBT-1400-OF', name: 'Attica Manolo 1400 Gloss White Bath with Overflow', image: '/images/products/baths/attica-manolo-1400-gloss-white-overflow.jpg' }
            ]
          },
          {
            slug: 'attica-havana',
            name: 'Attica Havana',
            description: 'Otti Australia\'s Havana bath range.',
            image: '/images/products/baths/attica-havana-1500-gloss-white-fluted-overflow.jpg',
            variants: [
              { slug: 'attica-havana-1500-gloss-white-fluted-overflow', code: 'AHBT-1500-OF', name: 'Attica Havana 1500 Gloss White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-1500-gloss-white-fluted-overflow.jpg' },
              { slug: 'attica-havana-1500-matte-white-fluted-overflow', code: 'AHBT-1500MW-OF', name: 'Attica Havana 1500 Matte White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-1500-matte-white-fluted-overflow.jpg' },
              { slug: 'attica-havana-1700-gloss-white-fluted-overflow', code: 'AHBT-1700-OF', name: 'Attica Havana 1700 Gloss White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-1700-gloss-white-fluted-overflow.jpg' },
              { slug: 'attica-havana-1700-matte-white-fluted-overflow', code: 'AHBT-1700MW-OF', name: 'Attica Havana 1700 Matte White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-1700-matte-white-fluted-overflow.jpg' },
              { slug: 'attica-havana-1500-gloss-white-btw-fluted-overflow', code: 'AHBT-BW-1500-OF', name: 'Attica Havana 1500 Gloss White BTW Multi-fit Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-1500-gloss-white-btw-fluted-overflow.jpg' },
              { slug: 'attica-havana-1500-matte-white-btw-fluted-overflow', code: 'AHBT-BW-1500MW-OF', name: 'Attica Havana 1500 Matte White BTW Multi-fit Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-1500-matte-white-btw-fluted-overflow.jpg' },
              { slug: 'attica-havana-1700-gloss-white-btw-fluted-overflow', code: 'AHBT-BW-1700-OF', name: 'Attica Havana 1700 Gloss White BTW Multi-fit Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-1700-gloss-white-btw-fluted-overflow.jpg' },
              { slug: 'attica-havana-1700-matte-white-btw-fluted-overflow', code: 'AHBT-BW-1700MW-OF', name: 'Attica Havana 1700 Matte White BTW Multi-fit Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-1700-matte-white-btw-fluted-overflow.jpg' },
              { slug: 'attica-havana-left-corner-1500-gloss-white-overflow', code: 'AHBT-1500L-OF', name: 'Attica Havana Left Corner 1500 Gloss White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-left-corner-1500-gloss-white-overflow.jpg' },
              { slug: 'attica-havana-right-corner-1500-gloss-white-overflow', code: 'AHBT-1500R-OF', name: 'Attica Havana Right Corner 1500 Gloss White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-right-corner-1500-gloss-white-overflow.jpg' },
              { slug: 'attica-havana-right-corner-1700-gloss-white-overflow', code: 'AHBT-1700R-OF', name: 'Attica Havana Right Corner 1700 Gloss White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-right-corner-1700-gloss-white-overflow.jpg' },
              { slug: 'attica-havana-left-corner-1500-matte-white-overflow', code: 'AHBT-1500LMW-OF', name: 'Attica Havana Left Corner 1500 Matte White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-left-corner-1500-matte-white-overflow.jpg' },
              { slug: 'attica-havana-right-corner-1500-matte-white-overflow', code: 'AHBT-1500RMW-OF', name: 'Attica Havana Right Corner 1500 Matte White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-right-corner-1500-matte-white-overflow.jpg' },
              { slug: 'attica-havana-left-corner-1700-gloss-white-overflow', code: 'AHBT-1700L-OF', name: 'Attica Havana Left Corner 1700 Gloss White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-left-corner-1700-gloss-white-overflow.jpg' },
              { slug: 'attica-havana-left-corner-1700-matte-white-overflow', code: 'AHBT-1700LMW-OF', name: 'Attica Havana Left Corner 1700 Matte White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-left-corner-1700-matte-white-overflow.jpg' },
              { slug: 'attica-havana-right-corner-1700-matte-white-overflow', code: 'AHBT-1700RMW-OF', name: 'Attica Havana Right Corner 1700 Matte White Fluted Bath with Overflow', image: '/images/products/baths/attica-havana-right-corner-1700-matte-white-overflow.jpg' }
            ]
          },
          {
            slug: 'attica-celine',
            name: 'Attica Celine',
            description: 'Otti Australia\'s Celine bath range.',
            image: '/images/products/baths/attica-celine-1500-gloss-white-overflow.jpg',
            variants: [
              { slug: 'attica-celine-1500-gloss-white-overflow', code: 'ACBT-1500-OF', name: 'Attica Celine 1500 Gloss White Bath with Overflow', image: '/images/products/baths/attica-celine-1500-gloss-white-overflow.jpg' },
              { slug: 'attica-celine-left-corner-1500-gloss-white-overflow', code: 'ACBT-1500L-OF', name: 'Attica Celine Left Corner 1500 Gloss White Bath with Overflow', image: '/images/products/baths/attica-celine-left-corner-1500-gloss-white-overflow.jpg' },
              { slug: 'attica-celine-left-corner-1500-matte-white-overflow', code: 'ACBT-1500LMW-OF', name: 'Attica Celine Left Corner 1500 Matte White Bath with Overflow', image: '/images/products/baths/attica-celine-left-corner-1500-matte-white-overflow.jpg' },
              { slug: 'attica-celine-1500-matte-white-overflow', code: 'ACBT-1500MW-OF', name: 'Attica Celine 1500 Matte White Bath with Overflow', image: '/images/products/baths/attica-celine-1500-matte-white-overflow.jpg' },
              { slug: 'attica-celine-right-corner-1500-gloss-white-overflow', code: 'ACBT-1500R-OF', name: 'Attica Celine Right Corner 1500 Gloss White Bath with Overflow', image: '/images/products/baths/attica-celine-right-corner-1500-gloss-white-overflow.jpg' },
              { slug: 'attica-celine-right-corner-1500-matte-white-overflow', code: 'ACBT-1500RMW-OF', name: 'Attica Celine Right Corner 1500 Matte White Bath with Overflow', image: '/images/products/baths/attica-celine-right-corner-1500-matte-white-overflow.jpg' },
              { slug: 'attica-celine-left-corner-1700-gloss-white-overflow', code: 'ACBT-1700L-OF', name: 'Attica Celine Left Corner 1700 Gloss White Bath with Overflow', image: '/images/products/baths/attica-celine-left-corner-1700-gloss-white-overflow.jpg' },
              { slug: 'attica-celine-left-corner-1700-matte-white-overflow', code: 'ACBT-1700LMW-OF', name: 'Attica Celine Left Corner 1700 Matte White Bath with Overflow', image: '/images/products/baths/attica-celine-left-corner-1700-matte-white-overflow.jpg' },
              { slug: 'attica-celine-right-corner-1700-gloss-white-overflow', code: 'ACBT-1700R-OF', name: 'Attica Celine Right Corner 1700 Gloss White Bath with Overflow', image: '/images/products/baths/attica-celine-right-corner-1700-gloss-white-overflow.jpg' },
              { slug: 'attica-celine-right-corner-1700-matte-white-overflow', code: 'ACBT-1700RMW-OF', name: 'Attica Celine Right Corner 1700 Matte White Bath with Overflow', image: '/images/products/baths/attica-celine-right-corner-1700-matte-white-overflow.jpg' },
              { slug: 'attica-celine-1500-gloss-white-btw-overflow', code: 'ACBT-BW-1500-OF', name: 'Attica Celine 1500 Gloss White BTW Multi-fit Bath with Overflow', image: '/images/products/baths/attica-celine-1500-gloss-white-btw-overflow.jpg' },
              { slug: 'attica-celine-1500-matte-white-btw-overflow', code: 'ACBT-BW-1500MW-OF', name: 'Attica Celine 1500 Matte White BTW Multi-fit Bath with Overflow', image: '/images/products/baths/attica-celine-1500-matte-white-btw-overflow.jpg' },
              { slug: 'attica-celine-1700-gloss-white-btw-overflow', code: 'ACBT-BW-1700-OF', name: 'Attica Celine 1700 Gloss White BTW Multi-fit Bath with Overflow', image: '/images/products/baths/attica-celine-1700-gloss-white-btw-overflow.jpg' },
              { slug: 'attica-celine-1700-matte-white-btw-overflow', code: 'ACBT-BW-1700MW-OF', name: 'Attica Celine 1700 Matte White BTW Multi-fit Bath with Overflow', image: '/images/products/baths/attica-celine-1700-matte-white-btw-overflow.jpg' }
            ]
          },
          { slug: 'bath-accessories', name: 'Bath Accessories', description: 'Otti Australia\'s bath accessories range.', image: '/images/products/baths/bath-accessories.jpg' }
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
