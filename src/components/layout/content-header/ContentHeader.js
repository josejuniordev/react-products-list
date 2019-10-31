import React from 'react';
import PropTypes from 'prop-types';
import './ContentHeader.scss';

function ContentHeader(
  {
    title,
    titleComplement,
    description,
    startEnhancer,
    endEnhancer,
  }
) {

  const StartEnhancer = startEnhancer;
  const EndEnhancer = endEnhancer;
  return (
    <header className='content-header'>
      <div className='content-header__container'>
        <h1 className='content-header__title'>
          {title}
          {
            titleComplement && (
              <span className='content-header__title-complement'> - {titleComplement}</span>
            )
          }
        </h1>

        {
          startEnhancer && (
            <div className="content-header__start-enhancer">
              {<StartEnhancer />}
            </div>
          )
        }

        {
          endEnhancer && (
            <div className="content-header__end-enhancer">
              {<EndEnhancer />}
            </div>
          )
        }

      </div>

      <p className='content-header__description'>{description}</p>
    </header>
  )
}

ContentHeader.propTypes = {
  title: PropTypes.string,
  titleComplement: PropTypes.string,
  description: PropTypes.string,
  startEnhancer: PropTypes.func,
  endEnhancer: PropTypes.func,
};

ContentHeader.defaultProps = {
  title: '',
  titleComplement: '',
  description: '',
  startEnhancer: null,
  endEnhancer: null,
};

export default ContentHeader;
