import React, { Fragment, useEffect, useState } from 'react';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import { connect } from 'react-redux';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';
import { useParams } from 'react-router-dom';
import AmountAndFavoriteInfoBar from '../../components/amount-and-favorite-info-bar/AmountAndFavoriteInfoBar';
import ProductInformation from '../../components/product-informations/ProductInformation';

export function ProductPage(
  {
    products,
  }
) {
  const [productData, setProductData] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    const currentProduct = findProduct(products.data, +id);
    setProductData(currentProduct);

  }, [id, products]);

  function findProduct(productsData, productId) {
    return productsData.find(product => product.id === productId);
  }

  function onSearchHandler(data) {
    // setProductsData(data);
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
        endEnhancer={<p>botão de voltar</p>}
      />

      <ProductInformation product={productData} />
    </Fragment>
  )
}

export default connect(({ products }) => ({products}))(ProductPage);
