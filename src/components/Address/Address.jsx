/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Address.module.css';
import { useTheme } from '../../contexts/ThemeContext';

function Address({ invoice }) {
  const { theme } = useTheme();
  return (
    <div
      className={`${styles.address} ${styles.clientAddress} ${
        theme === 'dark' && styles.dark
      }`}
    >
      <span>{invoice.clientAddress}</span>
      <span>{invoice.clientCity}</span>
      <span>{invoice.clientPostCode}</span>
      <span>{invoice.clientCountry}</span>
    </div>
  );
}

export default Address;
