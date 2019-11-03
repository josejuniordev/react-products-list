import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './BackButton.scss';

function BackButton(
  {
    history,
  }
) {

  function onClickHandler(ev) {
    ev.preventDefault();
    history.goBack();
  }

  return (
    <a href="#" className='back-button' onClick={(ev) => onClickHandler(ev)}>
      <img className='back-button__image'  src={process.env.PUBLIC_URL + '/images/return@2x.png'} />
    </a>
  )
}

export default withRouter(BackButton);
