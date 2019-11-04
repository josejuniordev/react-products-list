import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import AmountAndFavoriteInfoBar from '../../components/amount-and-favorite-info-bar/AmountAndFavoriteInfoBar';
import ProductInformation from '../../components/product-informations/ProductInformation';
import BackButton from '../../components/buttons/back-button/BackButton';

export function ProductPage(
  {
    products,
    match,
  },
) {
  const [productData, setProductData] = useState(false);

  useEffect(() => {
    const { id } = match.params;
    const currentProduct = findProduct(products.data, +id);
    setProductData(currentProduct);
  }, [match, products]);

  function findProduct(productsData, productId) {
    return productsData.find((product) => product.id === productId);
  }

  if (!productData) {
    return <p>Carregando produto...</p>;
  }


  return (
    <>
      <ContentHeader
        title={productData.name}
        description={productData.shortDescription}
        startEnhancer={(
          <AmountAndFavoriteInfoBar
            productId={productData.id}
            amount={productData.amount}
            isFavorite={productData.favorite}
          />
)}
        endEnhancer={<BackButton />}
      />

      <ProductInformation product={productData} />
    </>
  );
}

export default connect(({ products }) => ({ products }))(withRouter(ProductPage));
