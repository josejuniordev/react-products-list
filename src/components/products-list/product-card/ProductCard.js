import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from '../../../classes/Product';
import './ProductCard.scss';
import AmountAndFavoriteInfoBar from '../../amount-and-favorite-info-bar/AmountAndFavoriteInfoBar';
import ImageDisplay from '../../product-parts/image-display/ImageDisplay';

function ProductCard(
  {
    product,
  },
) {
  return (
    <article className="product-card">
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
        <h2 className="product-card__name"><Link to={`/product/${product.id}`}>{product.name}</Link></h2>
        <p className="product-card__description">{product.shortDescription}</p>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.instanceOf(Product).isRequired,
};

export default ProductCard;
