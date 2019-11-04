import React from 'react';
import './LayoutContainer.scss';
import PropTypes from 'prop-types';

function LayoutContainer(
  {
    children,
  },
) {
  return (
    <div className="layout-container">
      {children}
    </div>
  );
}

LayoutContainer.propTypes = {
  children: PropTypes.element,
};

LayoutContainer.defaultProps = {
  children: null,
};

export default LayoutContainer;
