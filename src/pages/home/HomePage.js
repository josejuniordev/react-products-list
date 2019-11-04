import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';

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

export default connect(({ products }) => ({ products }))(HomePage);
