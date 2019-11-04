import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from '../switch/Switch';
import './AmountAndFavoriteInfoBar.scss';
import { currencyFormat } from '../../helpers/utils';
import { addProductToFavorites, removeFavoriteProduct } from '../../ducks/products';

export function AmountAndFavoriteInfoBar(
  {
    amount,
    isFavorite,
    productId,
    sendToFavorites,
    removeFromFavorites,
  },
) {
  function onFavoriteProductChangeHandler(status) {
    if (status) {
      sendToFavorites(productId);
    } else {
      removeFromFavorites(productId);
    }
  }

  return (
    <div className="amount-favorite-info">
      <strong className="amount-favorite-info__amount">{currencyFormat(amount)}</strong>
      <Switch
        checked={isFavorite}
        label="tornar favorito"
        onChange={onFavoriteProductChangeHandler}
      />
    </div>
  );
}

AmountAndFavoriteInfoBar.propTypes = {
  amount: PropTypes.number,
  isFavorite: PropTypes.bool,
  productId: PropTypes.number,
  sendToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
};

AmountAndFavoriteInfoBar.defaultProps = {
  amount: 0,
  isFavorite: false,
  productId: 0,
  sendToFavorites: () => {},
  removeFromFavorites: () => {},
};

export default connect(
  false,
  (dispatch) => ({
    sendToFavorites(productId) {
      dispatch(addProductToFavorites(productId));
    },
    removeFromFavorites(productId) {
      dispatch(removeFavoriteProduct(productId));
    },
  }),
)(AmountAndFavoriteInfoBar);
