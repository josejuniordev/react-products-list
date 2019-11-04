import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import AmountAndFavoriteInfoBar from '../../components/amount-and-favorite-info-bar/AmountAndFavoriteInfoBar';
import ProductInformation from '../../components/product-informations/ProductInformation';
import BackButton from '../../components/buttons/back-button/BackButton';
import productsStateShape from '../../constants/products-state-shape';

export function ProductPage(
  {
    products,
    match,
  },
) {
  const [productData, setProductData] = useState(false);

  useEffect(() => {
    function findProduct(productsData, productId) {
      return productsData.find((product) => product.id === productId);
    }

    const { id } = match.params;
    const currentProduct = findProduct(products.data, +id);
    setProductData(currentProduct);
  }, [match, products]);

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

ProductPage.propTypes = {
  products: PropTypes.shape(productsStateShape),
  match: PropTypes.shape({ params: PropTypes.any }),
};

ProductPage.defaultProps = {
  products: null,
  match: null,
};

export default connect(({ products }) => ({ products }))(withRouter(ProductPage));
