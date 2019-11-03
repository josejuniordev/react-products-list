import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './ContentHeader.scss';
import classnames from 'classnames';
import { componentsSizes } from '../../../constants/components-sizes';

function ContentHeader(
  {
    title,
    titleComplement,
    description,
    startEnhancer,
    endEnhancer,
    size,
  }
) {

  const StartEnhancer = startEnhancer;
  const EndEnhancer = endEnhancer;

  const classname = classnames({
    'content-header': true,
    'content-header--is-small': size === componentsSizes.SMALL,
  });
  return (
    <header className={classname}>
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
              {StartEnhancer}
            </div>
          )
        }

        {
          endEnhancer && (
            <div className="content-header__end-enhancer">
              {EndEnhancer}
            </div>
          )
        }

      </div>

      { description && <p className='content-header__description'>{description}</p> }
    </header>
  )
}

ContentHeader.propTypes = {
  title: PropTypes.string,
  titleComplement: PropTypes.string,
  description: PropTypes.string,
  startEnhancer: PropTypes.element,
  endEnhancer: PropTypes.element,
  size: PropTypes.oneOf(['small', 'normal', 'big']),
};

ContentHeader.defaultProps = {
  title: '',
  titleComplement: '',
  description: '',
  startEnhancer: null,
  endEnhancer: null,
  size: 'normal',
};

export default memo(ContentHeader);
