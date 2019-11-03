import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../../classes/Product';
import './ProductCard.scss';
import AmountAndFavoriteInfoBar from '../../amount-and-favorite-info-bar/AmountAndFavoriteInfoBar';

function ProductCard(
  {
    product,
  }
) {

  function renderProductFlag() {
    if (product.onSale) {
      return <h3 className='product-card__flag product-card__flag--is-on-sale'>Promoção</h3>
    }

    if (product.exclusive) {
      return <h3 className='product-card__flag product-card__flag--is-exclusive'>Exclusivo</h3>
    }
  }

  return (
    <article className='product-card'>
      <div className='product-card__image-container' style={{backgroundImage: `url(${product.imageUrl})`}}>
        {renderProductFlag()}
      </div>
      <div className="product-card__body">
        <div className="product-card__action-bar">
          <AmountAndFavoriteInfoBar
            amount={product.amount}
            isFavorite={product.favorite}
            productId={product.id}
          />
        </div>
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
