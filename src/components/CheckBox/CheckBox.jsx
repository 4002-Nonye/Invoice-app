/* eslint-disable react/prop-types */
import React from 'react';
import styles from './CheckBox.module.css';

function CheckBox({
  id,
  type,
  onRadioChange,
  index,
  setCurChecked,
  curChecked,
  setStatus,
}) {

  // uncheck box if it is clicked twice
  const isChecked = curChecked === index;
  const handleChecked = () => {
   
    if (isChecked) {
      setCurChecked(false);
      setStatus('');
    } else {
      setCurChecked(index);
    }
  };
  // change text to camelcase
  const firstLetter = id.split('')[0];
  const rest = id.slice(1, id.length);
  const camelCase = firstLetter.toUpperCase().concat(rest);

  return (
    <label htmlFor={id} className={styles.container}>
      {camelCase}
      <input
        onClick={handleChecked}
        id={id}
        type={type}
        name={type}
        onChange={onRadioChange}
        value={id}
        checked={isChecked}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
}

export default CheckBox;
