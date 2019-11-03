import React from 'react';
import { withRouter } from 'react-router-dom';
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
    <button  className='back-button' onClick={(ev) => onClickHandler(ev)}>
      <img className='back-button__image' alt='Voltar' src={process.env.PUBLIC_URL + '/images/return@2x.png'} />
    </button>
  )
}

export default withRouter(BackButton);
