import React, { Fragment, useEffect, useState } from 'react';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import ContentBody from '../../components/layout/content-body/ContentBody';
import { connect } from 'react-redux';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';

export function HomePage(
  {
    match,
    location,
    history,
    products,
  }
) {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(products.data);
  }, [products]);

  function onSearchHandler(data) {
    setProductsData(data);
  }

  return (
    <Fragment>
      <ContentHeader
        title='Empresa XPTO'
        titleComplement='Conheça todos os nossos produtos'
        description='Listagem de produtos - clique no produto desejado para saber mais'
        startEnhancer={<p>start</p>}
        endEnhancer={<SearchBar data={products.data} onSearch={onSearchHandler} />}
      />

      {
        products.loading.fetch
          ? <p>Buscando produtos...</p>
          : <ProductsList products={productsData} />
      }
    </Fragment>
  )
}

export default connect(({ products }) => ({products}))(HomePage);
