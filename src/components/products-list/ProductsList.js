import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './product-card/ProductCard';
import Product from '../../classes/Product';
import './ProductsList.scss';
import { withRouter } from 'react-router-dom';

function ProductsList(
  {
    products,
    history,
  }
) {

  return (
    <section className='products-list'>
      {
        products.length
          ? (
              products.map(product => {
                return (
                  <div className="products-list__item">
                    <ProductCard key={product.id} product={product} />
                  </div>
                );
              })
            )
          : <p>Não existem produtos para exibir.</p>
      }
    </section>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.instanceOf(Product)
  ),
};

ProductsList.defaultProps = {
  products: [],
};

export default withRouter(ProductsList);
