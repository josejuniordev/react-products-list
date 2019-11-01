import React, { useState } from 'react';
import './Switch.scss';
import PropTypes from 'prop-types';

function Switch(
  {
    checked,
    label,
    onChange,
  }
) {
  const [id] = useState(+new Date());
  const [checkedState, setCheckedState] = useState(checked);

  function onChangeHandler(event) {
    const isChecked = event.target.checked;
    onChange(isChecked);
    setCheckedState(isChecked);
  }

  return (
    <div className='switch-checkbox'>
      <input checked={checkedState} onChange={onChangeHandler} id={id} className='switch-checkbox__input' type="checkbox"/>
      <label htmlFor={id} className='switch-checkbox__switch'></label>
      <span className='switch-checkbox__label'>{label}</span>
    </div>
  )
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
