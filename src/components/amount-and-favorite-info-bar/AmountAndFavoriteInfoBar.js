import React from 'react';
import Switch from '../switch/Switch';
import PropTypes from 'prop-types';
import './AmountAndFavoriteInfoBar.scss';
import { currencyFormat } from '../../helpers/utils';
import { addProductToFavorites, removeFavoriteProduct } from '../../ducks/products';
import { connect } from 'react-redux';

export function AmountAndFavoriteInfoBar(
  {
    amount,
    isFavorite,
    productId,
    sendToFavorites,
    removeFromFavorites,
  }
) {

  function onFavoriteProductChangeHandler(status) {
    if (status) {
      sendToFavorites(productId);

    } else {
      removeFromFavorites(productId);
    }
  }

  return (
    <div className='amount-favorite-info'>
      <strong className='amount-favorite-info__amount'>{currencyFormat(amount)}</strong>
      <Switch
        checked={isFavorite}
        label='tornar favorito'
        onChange={onFavoriteProductChangeHandler}
      />
    </div>
  )
}

Switch.propTypes = {
  amount: PropTypes.number,
  isFavorite: PropTypes.bool,
  productId: PropTypes.number,
};

Switch.defaultProps = {
  amount: 0,
  isFavorite: false,
  productId: 0,
};

export default connect(
  false,
  dispatch => ({
    sendToFavorites(productId) {
      dispatch(addProductToFavorites(productId));
    },
    removeFromFavorites(productId) {
      dispatch(removeFavoriteProduct(productId));
    }
  })
)(AmountAndFavoriteInfoBar);
