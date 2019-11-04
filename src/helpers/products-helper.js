// eslint-disable-next-line import/prefer-default-export
export function updateProductFavoriteStatus(products = [], targetId, value) {
  return products.map((product) => {
    const modifiedProduct = { ...product };
    if (product.id === targetId) {
      modifiedProduct.favorite = value;
    }

    return modifiedProduct;
  });
}
