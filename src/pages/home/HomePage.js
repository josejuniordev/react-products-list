import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';
import productsStateShape from '../../constants/products-state-shape';

export function HomePage(
  {
    products,
  },
) {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(products.data);
  }, [products]);

  function onSearchHandler(data) {
    setProductsData(data);
  }

  return (
    <>
      <ContentHeader
        title="Empresa XPTO"
        titleComplement="Conheça todos os nossos produtos"
        description="Listagem de produtos - clique no produto desejado para saber mais"
        endEnhancer={<SearchBar data={products.data} onSearch={onSearchHandler} />}
      />

      {
        products.loading.fetch
          ? <p>Buscando produtos...</p>
          : <ProductsList products={productsData} />
      }
    </>
  );
}

HomePage.propTypes = {
  products: PropTypes.shape(productsStateShape),
};

HomePage.defaultProps = {
  products: null,
};

export default connect(({ products }) => ({ products }))(HomePage);
