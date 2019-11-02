import React, { Fragment, useEffect, useState } from 'react';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import ContentBody from '../../components/layout/content-body/ContentBody';
import { connect } from 'react-redux';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';

export function FavoritesPage(
  {
    products,
  }
) {
  const [productsData, setProductsData] = useState([]);
  const [FavoritesProducts, setFavoritesProducts] = useState([]);

  useEffect(() => {
    setFavoritesProducts(products.favorites);
    setProductsData(products.favorites);
  }, [products]);

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
          : <ProductsList products={productsData} />
      }
    </Fragment>
  )
}

export default connect(({ products }) => ({products}))(FavoritesPage);
