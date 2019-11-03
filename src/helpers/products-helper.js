export function updateProductFavoriteStatus(products = [], targetId, value) {
  return products.map(product => {
    if (product.id === targetId) {
      product.favorite = value;
    }

    return product;
  });
}
