import React, { Fragment, useEffect, useState } from 'react';
import ContentHeader from '../components/layout/content-header/ContentHeader';
import ContentBody from '../components/layout/content-body/ContentBody';
import { connect } from 'react-redux';
import ProductsList from '../components/products-list/ProductsList';

export function HomePage(
  {
    match,
    location,
    history,
    products,
  }
) {
  return (
    <Fragment>
      <ContentHeader
        title='Empresa XPTO'
        titleComplement='Conheça todos os nossos produtos'
        description='Listagem de produtos - clique no produto desejado para saber mais'
        startEnhancer={() => <p>start</p>}
        endEnhancer={() => <p>end</p>}
      />

      <ProductsList products={products.data} />
    </Fragment>
  )
}

export default connect(({ products }) => ({products}))(HomePage);
