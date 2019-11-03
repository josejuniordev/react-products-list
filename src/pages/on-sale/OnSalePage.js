import React, { Fragment, useEffect, useState } from 'react';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import { connect } from 'react-redux';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';

export function OnSalePage(
  {
    products,
  }
) {
  const [productsData, setProductsData] = useState([]);
  const [onSaleProducts, setOnSaleProducts] = useState([]);

  useEffect(() => {
    const filtered = filterProducts(products.data);
    setOnSaleProducts(filtered);
    setProductsData(filtered);
  }, [products]);

  function filterProducts(products = []) {
    return products.filter(product => product.onSale);
  }

  function onSearchHandler(data) {
    setProductsData(data);
  }

  return (
    <Fragment>
      <ContentHeader
        title='Empresa XPTO'
        titleComplement='Conheça nossas promoções'
        description='Listagem de produtos em promoção - clique no produto desejado para saber mais'
        endEnhancer={<SearchBar data={onSaleProducts} onSearch={onSearchHandler} />}
      />

      {
        products.loading.fetch
          ? <p>Buscando produtos...</p>
          : <ProductsList products={productsData} />
      }
    </Fragment>
  )
}

export default connect(({ products }) => ({products}))(OnSalePage);
