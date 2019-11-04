import React from 'react';
import './ImageDisplay.scss';
import PropTypes from 'prop-types';
import Product from '../../../classes/Product';

function ImageDisplay(
  {
    product,
  },
) {
  function renderProductFlag() {
    if (product.onSale) {
      return <h3 className="image-display__flag image-display__flag--is-on-sale">Promoção</h3>;
    }

    if (product.exclusive) {
      return <h3 className="image-display__flag image-display__flag--is-exclusive">Exclusivo</h3>;
    }

    return null;
  }

  return (
    <div className="image-display__image-container" style={{ backgroundImage: `url(${product.imageUrl})` }}>
      {renderProductFlag()}
    </div>
  );
}

ImageDisplay.propTypes = {
  product: PropTypes.instanceOf(Product),
};

ImageDisplay.defaultProps = {
  product: null,
};

export default ImageDisplay;
