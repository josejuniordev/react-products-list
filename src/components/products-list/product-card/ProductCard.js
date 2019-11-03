import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../../classes/Product';
import './ProductCard.scss';
import AmountAndFavoriteInfoBar from '../../amount-and-favorite-info-bar/AmountAndFavoriteInfoBar';
import ImageDisplay from '../../product-parts/image-display/ImageDisplay';

function ProductCard(
  {
    product,
    onClick = () => {},
  }
) {

  function onClickHandler(ev) {
    ev.preventDefault();
    onClick();
  }

  return (
    <article className='product-card'>
      <div className="product-card__image">
        <ImageDisplay product={product} />
      </div>
      <div className="product-card__body">
        <div className="product-card__action-bar">
          <AmountAndFavoriteInfoBar
            amount={product.amount}
            isFavorite={product.favorite}
            productId={product.id}
          />
        </div>
        <h2 className='product-card__name'><a href="#" onClick={onClickHandler}>{product.name}</a></h2>
        <p className='product-card__description'>{product.shortDescription}</p>
      </div>
    </article>
  )
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Product),
  onClick: PropTypes.func,
};

export default ProductCard;
