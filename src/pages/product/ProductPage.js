import React, { Fragment, useEffect, useState } from 'react';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import { connect } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import AmountAndFavoriteInfoBar from '../../components/amount-and-favorite-info-bar/AmountAndFavoriteInfoBar';
import ProductInformation from '../../components/product-informations/ProductInformation';
import BackButton from '../../components/buttons/back-button/BackButton';
import history from '../../history';
export function ProductPage(
  {
    products,
    match,
  }
) {
  const [productData, setProductData] = useState(false);

  console.log('history', history)

  useEffect(() => {
    const id = match.params.id;
    const currentProduct = findProduct(products.data, +id);
    setProductData(currentProduct);
  }, [match, products]);

  function findProduct(productsData, productId) {
    return productsData.find(product => product.id === productId);
  }

  if (!productData) {
    return <p>Carregando produto...</p>;
  }


  return (
    <Fragment>
      <ContentHeader
        title={productData.name}
        description={productData.shortDescription}
        startEnhancer={
          <AmountAndFavoriteInfoBar
            productId={productData.id}
            amount={productData.amount}
            isFavorite={productData.favorite}
          />
        }
        endEnhancer={<BackButton/>}
      />

      <ProductInformation product={productData} />
    </Fragment>
  )
}

export default connect(({ products }) => ({products}))(withRouter(ProductPage));
