import React, { useState } from 'react';
import './Switch.scss';
import PropTypes from 'prop-types';

function Switch(
  {
    checked,
    label,
    onChange = () => {},
  },
) {
  const [id] = useState(+new Date());
  const [checkedState, setCheckedState] = useState(checked);

  function onChangeHandler(isChecked) {
    onChange(isChecked);
    setCheckedState(isChecked);
  }

  function onClickHandler() {
    onChangeHandler(!checkedState);
  }

  return (
    <div className="switch-checkbox">
      <input checked={checkedState} onChange={(event) => onChangeHandler(event.target.checked)} id={id} className="switch-checkbox__input" type="checkbox" />
      <label htmlFor={id} className="switch-checkbox__switch" />
      <span onClick={onClickHandler} className="switch-checkbox__label">{label}</span>
    </div>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  checked: false,
  label: '',
  onChange: () => {},
};

export default Switch;
