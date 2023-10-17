import React from 'react';
import styles from './NoInvoice.module.css';
import illustrator from '../../assets/illustrator.svg';
import { useTheme } from '../../contexts/ThemeContext';

function NoInvoice() {
  const { theme } = useTheme();
  return (
    <div className={styles.noInvoice}>
      {' '}
      <img src={illustrator} alt="illustrator" />
      <p className={`${styles.err} ${theme === 'dark' && styles.dark}`}>
        There is nothing here
      </p>
      <p className={styles.create}>
        {' '}
        Create an invoice by clicking the <br /> <strong>New Invoice </strong>
        button and get started
      </p>
    </div>
  );
}

export default NoInvoice;
