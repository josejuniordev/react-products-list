import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ContentHeader from '../../components/layout/content-header/ContentHeader';
import ProductsList from '../../components/products-list/ProductsList';
import SearchBar from '../../components/search-bar/SearchBar';

export function OnSalePage(
  {
    products,
  },
) {
  const [productsData, setProductsData] = useState([]);
  const [onSaleProducts, setOnSaleProducts] = useState([]);

  useEffect(() => {
    const filtered = filterProducts(products.data);
    setOnSaleProducts(filtered);
    setProductsData(filtered);
  }, [products]);

  function filterProducts(productsList = []) {
    return productsList.filter((product) => product.onSale);
  }

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

export default connect(({ products }) => ({ products }))(OnSalePage);
