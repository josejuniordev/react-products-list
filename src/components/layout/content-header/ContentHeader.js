import React from 'react';
import PropTypes from 'prop-types';
import './ContentHeader.scss';

function ContentHeader(
  {
    title,
    titleComplement,
    description,
  }
) {
  return (
    <header className='content-header'>
      <h1 className='content-header__title'>
        {title}
        {
          titleComplement && (
            <span className='content-header__title-complement'> - {titleComplement}</span>
          )
        }
      </h1>
      <p className='content-header__description'>{description}</p>
    </header>
  )
}

ContentHeader.propTypes = {
  title: PropTypes.string,
  titleComplement: PropTypes.string,
  description: PropTypes.string,
};

ContentHeader.defaultProps = {
  title: '',
  titleComplement: '',
  description: '',
};

export default ContentHeader;
