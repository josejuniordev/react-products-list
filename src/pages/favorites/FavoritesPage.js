import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';
import productsStateShape from '../../constants/products-state-shape';

export function FavoritesPage(
  {
    products,
  },
) {
  const [productsData, setProductsData] = useState([]);
  const [FavoritesProducts, setFavoritesProducts] = useState([]);

  function filterProducts(productsList = []) {
    return productsList.filter((product) => product.favorite);
  }

  function onSearchHandler(data) {
    setProductsData(data);
  }

  useEffect(() => {
    const filtered = filterProducts(products.data);
    setFavoritesProducts(filtered);
    setProductsData(filtered);
  }, [products]);

  return (
    <>
      <ContentHeader
        title="Empresa XPTO"
        titleComplement="Meus favoritos"
        description="Listagem de produtos marcados como favoritos - clique no produto desejado para saber mais"
        endEnhancer={<SearchBar data={FavoritesProducts} onSearch={onSearchHandler} />}
      />

      {
        products.loading.fetch
          ? <p>Buscando produtos...</p>
          : <ProductsList products={productsData} />
      }
    </>
  );
}

FavoritesPage.propTypes = {
  products: PropTypes.shape(productsStateShape),
};

FavoritesPage.defaultProps = {
  products: null,
};

export default connect(({ products }) => ({ products }))(FavoritesPage);
