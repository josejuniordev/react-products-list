import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ProductCard from './product-card/ProductCard';
import Product from '../../classes/Product';
import './ProductsList.scss';

function ProductsList(
  {
    products,
  }
) {

  return (
    <section className='products-list'>
      {
        products.map(product => {
          return (
            <div className="products-list__item">
              <ProductCard key={product.id} product={product} />
            </div>
          );
        })
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

export default ProductsList;
