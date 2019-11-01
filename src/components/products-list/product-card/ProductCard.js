import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../../classes/Product';
import './ProductCard.scss';

function ProductCard(
  {
    product,
  }
) {

  return (
    <article className='product-card'>
      <div className='product-card__image-container' style={{backgroundImage: `url(${product.imageUrl})`}}>
        <h3>Promoção</h3>
      </div>
      <div className="product-card__body">
        <h2 className='product-card__name'>{product.name}</h2>
        <p className='product-card__description'>{product.shortDescription}</p>
      </div>
    </article>
  )
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Product),
};

export default ProductCard;
