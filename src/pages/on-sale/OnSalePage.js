import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';
import productsStateShape from '../../constants/products-state-shape';

export function OnSalePage(
  {
    products,
  },
) {
  const [productsData, setProductsData] = useState([]);
  const [onSaleProducts, setOnSaleProducts] = useState([]);

  useEffect(() => {
    function filterProducts(productsList = []) {
      return productsList.filter((product) => product.onSale);
    }

    const filtered = filterProducts(products.data);
    setOnSaleProducts(filtered);
    setProductsData(filtered);
  }, [products]);

  function onSearchHandler(data) {
    setProductsData(data);
  }

  return (
    <>
      <ContentHeader
        title="Empresa XPTO"
        titleComplement="Conheça nossas promoções"
        description="Listagem de produtos em promoção - clique no produto desejado para saber mais"
        endEnhancer={<SearchBar data={onSaleProducts} onSearch={onSearchHandler} />}
      />

      {
        products && products.loading.fetch
          ? <p>Buscando produtos...</p>
          : <ProductsList products={productsData} />
      }
    </>
  );
}

OnSalePage.propTypes = {
  products: PropTypes.shape(productsStateShape),
};

OnSalePage.defaultProps = {
  products: null,
};

export default connect(({ products }) => ({ products }))(OnSalePage);
