import PropTypes from 'prop-types';
import Product from '../classes/Product';

const productsStateShape = {
  data: PropTypes.arrayOf(Product),
  loading: PropTypes.shape(
    {
      fetch: PropTypes.bool,
    },
  ),
};

export default productsStateShape;
