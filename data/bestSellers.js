const { subcategories } = require('./bathroomCatalog');

// Best Sellers pool: every purchasable, specific item in the bathroom catalog — a
// variant (exact size/finish) where the product has variants, otherwise the product
// itself. A random selection is featured below at server start — this is a placeholder
// until real sales-ranked picks replace the randomness.
function allLeafItems() {
  const items = [];
  subcategories.forEach(function (subcategory) {
    subcategory.suppliers.forEach(function (supplier) {
      supplier.products.forEach(function (product) {
        if (product.variants && product.variants.length) {
          product.variants.forEach(function (variant) {
            items.push({
              name: variant.name,
              description: product.description,
              image: variant.image,
              subcategoryName: subcategory.name,
              href: `/product-range/bathroom/${subcategory.slug}/${supplier.slug}/${product.slug}/${variant.slug}`
            });
          });
        } else {
          items.push({
            name: product.name,
            description: product.description,
            image: product.image,
            subcategoryName: subcategory.name,
            href: `/product-range/bathroom/${subcategory.slug}/${supplier.slug}/${product.slug}`
          });
        }
      });
    });
  });
  return items;
}

function pickRandom(items, count) {
  const pool = items.slice();
  const picked = [];
  while (pool.length && picked.length < count) {
    const i = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(i, 1)[0]);
  }
  return picked;
}

const bestSellers = pickRandom(allLeafItems(), 8);

module.exports = bestSellers;
