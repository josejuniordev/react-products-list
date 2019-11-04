import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';
import productsStateShape from '../../constants/products-state-shape';

export function ExclusivesPage(
  {
    products,
  },
) {
  const [productsData, setProductsData] = useState([]);
  const [exclusiveProducts, setExclusiveProducts] = useState([]);

  function filterProducts(productsList = []) {
    return productsList.filter((product) => product.exclusive);
  }

  function onSearchHandler(data) {
    setProductsData(data);
  }

  useEffect(() => {
    const filtered = filterProducts(products.data);
    setExclusiveProducts(filtered);
    setProductsData(filtered);
  }, [products]);

  return (
    <>
      <ContentHeader
        title="Empresa XPTO"
        titleComplement="Conheça os produtos exclusivos"
        description="Listagem de produtos exclusivos - clique no produto desejado para saber mais"
        endEnhancer={<SearchBar data={exclusiveProducts} onSearch={onSearchHandler} />}
      />

      {
        products && products.loading.fetch
          ? <p>Buscando produtos...</p>
          : <ProductsList products={productsData} />
      }
    </>
  );
}

ExclusivesPage.propTypes = {
  products: PropTypes.shape(productsStateShape),
};

ExclusivesPage.defaultProps = {
  products: null,
};

export default connect(({ products }) => ({ products }))(ExclusivesPage);
