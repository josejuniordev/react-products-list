import React, { Fragment, useEffect, useState } from 'react';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import { connect } from 'react-redux';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';

export function ExclusivesPage(
  {
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
        description='Listagem de produtos exclusivos - clique no produto desejado para saber mais'
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
