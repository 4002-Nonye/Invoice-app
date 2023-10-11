/* eslint-disable react/prop-types */
import React from 'react';
import styles from './CheckBox.module.css';
import { useInvoice } from '../../contexts/InvoiceContext';

function CheckBox({ id, type }) {
  // handle radio check
  const { handleInputChange: handleRadioChange, status } = useInvoice();

  // PERSIST CHECK STATE
  // Define an array of allowed status values
  const allowedStatusValues = ['pending', 'draft', 'paid'];

  // Check if the current status is one of the allowed values
  const isChecked = allowedStatusValues.includes(status) && status === id;

  // uncheck box if it is clicked twice
  const handleChecked = () => {
    if (isChecked) {
      handleRadioChange('', 'STATUS/CHANGED');
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
        onChange={(e) => handleRadioChange(e.target.value, 'STATUS/CHANGED')}
        value={id}
        checked={isChecked}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
}

export default CheckBox;
