/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Address.module.css';
import { useTheme } from '../../contexts/ThemeContext';

function Address({ address, city, postCode, country, className }) {
  const { theme } = useTheme();
  return (
    <div
      className={`${styles.address} ${styles[className]} ${
        theme === 'dark' && styles.dark
      }`}
    >
      <span>{address}</span>
      <span>{city}</span>
      <span>{postCode}</span>
      <span>{country}</span>
    </div>
  );
}

export default Address;
