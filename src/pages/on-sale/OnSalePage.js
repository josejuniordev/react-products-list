import React, { Fragment, useEffect, useState } from 'react';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import ContentBody from '../../components/layout/content-body/ContentBody';
import { connect } from 'react-redux';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';

export function ExclusivesPage(
  {
    match,
    location,
    history,
    products,
  }
) {
  const [productsData, setProductsData] = useState([]);
  const [exclusiveProducts, setExclusiveProducts] = useState([]);

  useEffect(() => {
    const filtered = filterProducts(products.data);
    setExclusiveProducts(filtered);
    setProductsData(filtered);
  }, [products]);

  function filterProducts(products = []) {
    return products.filter(product => product.exclusive);
  }

  function onSearchHandler(data) {
    setProductsData(data);
  }

  return (
    <Fragment>
      <ContentHeader
        title='Empresa XPTO'
        titleComplement='Conheça os produtos exclusivos'
        description='Listagem de produtos - clique no produto desejado para saber mais'
        endEnhancer={<SearchBar data={exclusiveProducts} onSearch={onSearchHandler} />}
      />

      {
        products.loading.fetch
          ? <p>Buscando produtos...</p>
          : <ProductsList products={productsData} />
      }
    </Fragment>
  )
}

export default connect(({ products }) => ({products}))(ExclusivesPage);
