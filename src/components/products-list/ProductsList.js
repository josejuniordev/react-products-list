import React from 'react';
import PropTypes from 'prop-types';

function ProductsList(
  {
    products,
  }
) {
  return (
    <div>
      {
        products.map(product => {
          return <div>{product.nome}</div>;
        })
      }
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsList.defaultProps = {
  products: [],
};

export default ProductsList;
