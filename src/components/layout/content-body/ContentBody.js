import React from 'react';
import PropTypes from 'prop-types';
import './ContentBody.scss';

function ContentBody(
  {
    children,
  },
) {
  return (
    <div className="content-body">
      {children}
    </div>
  );
}

ContentBody.propTypes = {
  children: PropTypes.element,
};

ContentBody.defaultProps = {
  children: null,
};

export default ContentBody;
