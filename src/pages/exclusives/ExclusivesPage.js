import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';

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

export default connect(({ products }) => ({ products }))(ExclusivesPage);
