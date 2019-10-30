import React from 'react';
import PropTypes from 'prop-types';
import './ContentHeader.scss';

function ContentHeader(
  {
    title,
    description,
  }
) {
  return (
    <header className='content-header'>
      <h1 className='content-header__title'>{title}</h1>
      <p className='content-header__description'>{description}</p>
    </header>
  )
}

ContentHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

ContentHeader.defaultProps = {
  title: '',
  description: '',
};

export default ContentHeader;
