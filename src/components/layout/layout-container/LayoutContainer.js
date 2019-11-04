import React from 'react';
import './LayoutContainer.scss';

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

export default LayoutContainer;
