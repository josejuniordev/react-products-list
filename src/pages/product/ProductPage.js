import React, { Fragment, useEffect, useState } from 'react';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import { connect } from 'react-redux';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';
import { useParams } from 'react-router-dom';

export function ProductPage(
  {
    products,
  }
) {
  const [productData, setProductData] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      console.log('produto Id', id)
    }
  }, [id]);

  function filterProducts(products = []) {
    return products.filter(product => product.favorite);
  }

  function onSearchHandler(data) {
    setProductsData(data);
  }

  return (
    <Fragment>
      <ContentHeader
        title='Empresa XPTO'
        titleComplement='Meus favoritos'
        description='Listagem de produtos marcados como favoritos - clique no produto desejado para saber mais'
        endEnhancer={<SearchBar data={FavoritesProducts} onSearch={onSearchHandler} />}
      />

      {
        products.loading.fetch
          ? <p>Buscando produtos...</p>
          : <ProductsList products={productData} />
      }
    </Fragment>
  )
}

export default connect(({ products }) => ({products}))(ProductPage);
