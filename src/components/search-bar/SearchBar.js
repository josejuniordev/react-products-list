import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Product from '../../classes/Product';
import './SearchBar.scss';

function SearchBar(
  {
    onSearch = () => {},
    data,
    valueKey,
  }
) {

  function onSearchHandler(ev) {
    const value = ev.target.value;

    if (!value) {
      onSearch(data);
      return false;
    }

    const regex = new RegExp(value, 'ig');
    const filtered = data.filter(item => item[valueKey].match(regex));

    onSearch(filtered);
  }

  return (
    <div className='search-bar'>
      <button className='search-bar__button'>
        <img className='search-bar__icon'  src={process.env.PUBLIC_URL + '/images/loupe@2x.png'} />
      </button>
      <input
        placeholder='Buscar'
        className='search-bar__input'
        onChange={onSearchHandler}
        type='text'
      />
    </div>
  )
}

SearchBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Product)),
  onSearch: PropTypes.func,
  valueKey: PropTypes.string,
};

SearchBar.defaultProps = {
  data: [],
  valueKey: 'name',
};

export default memo(SearchBar);
