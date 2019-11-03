import React from 'react';
import './ImageDisplay.scss';

function ImageDisplay(
  {
    product
  }
) {

  function renderProductFlag() {
    if (product.onSale) {
      return <h3 className='image-display__flag image-display__flag--is-on-sale'>Promoção</h3>
    }

    if (product.exclusive) {
      return <h3 className='image-display__flag image-display__flag--is-exclusive'>Exclusivo</h3>
    }
  }

  return (
    <div className='image-display__image-container' style={{backgroundImage: `url(${product.imageUrl})`}}>
      {renderProductFlag()}
    </div>
  )
}

export default ImageDisplay;
