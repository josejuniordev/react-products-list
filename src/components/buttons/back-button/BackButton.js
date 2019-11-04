import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './BackButton.scss';

function BackButton(
  {
    history,
  },
) {
  function onClickHandler(ev) {
    ev.preventDefault();
    history.goBack();
  }

  return (
    <button type="button" className="back-button" onClick={(ev) => onClickHandler(ev)}>
      <img className="back-button__image" alt="Voltar" src={`${process.env.PUBLIC_URL}/images/return@2x.png`} />
    </button>
  );
}

BackButton.propTypes = {
  history: PropTypes.shape({ goBack: PropTypes.func }),
};

BackButton.defaultProps = {
  history: () => {},
};

export default withRouter(BackButton);
