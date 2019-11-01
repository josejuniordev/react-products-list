import React from 'react';
import Switch from '../switch/Switch';
import PropTypes from 'prop-types';
import './AmountAndFavoriteInfoBar.scss';
import { currencyFormat } from '../../helpers/utils';

function AmountAndFavoriteInfoBar(
  {
    amount,
    isFavorite
  }
) {
  return (
    <div className='amount-favorite-info'>
      <strong className='amount-favorite-info__amount'>{currencyFormat(amount)}</strong>
      <Switch
        checked={isFavorite}
        label='tornar favorito'
      />
    </div>
  )
}

Switch.propTypes = {
  amount: PropTypes.number,
  isFavorite: PropTypes.bool,
};

Switch.defaultProps = {
  amount: 0,
  isFavorite: false,
};

export default AmountAndFavoriteInfoBar;
