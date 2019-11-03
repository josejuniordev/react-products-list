import React from 'react';
import './ContentBody.scss';

function ContentBody(
  {
    children,
  }
) {
  return (
    <div className="content-body">
      {children}
    </div>
  )
}

export default ContentBody;
