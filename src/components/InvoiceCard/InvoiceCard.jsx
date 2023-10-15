/* eslint-disable react/prop-types */
import React from 'react';
import styles from './InvoiceCard.module.css';
import arrowRight from '../../assets/arrow-right.svg';
import { useTheme } from '../../contexts/ThemeContext';

function InvoiceCard({ invoice }) {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`${styles.invoiceItem}  ${theme === 'dark' && styles.dark}`}
      >
        <div className={styles.left}>
          <p className={`id  ${theme === 'dark' && 'dark'}`}>
            <span className={`hash`}> #</span>
            {invoice.id}
          </p>
          <p className={`${styles.dueDate} ${theme === 'dark' && styles.dark}`}>
            Due{' '}
            <span
              className={`${styles.date}  ${theme === 'dark' && styles.dark}`}
            >
              {invoice.dueDate}
            </span>
          </p>
          <p
            className={`${styles.name} ${styles.desktopName}  ${
              theme === 'dark' && styles.dark
            }`}
          >
            {invoice.name}
          </p>
          <p
            className={`${styles.amount} ${styles.mobileAmount}  ${
              theme === 'dark' && styles.dark
            }`}
          >
            £ {invoice.amount}
          </p>
        </div>

        <div className={styles.right}>
          <p
            className={`${styles.name} ${styles.mobileName}  ${
              theme === 'dark' && styles.dark
            }`}
          >
            {invoice.name}
          </p>
          <p
            className={`${styles.amount} ${styles.desktopAmount}  ${
              theme === 'dark' && styles.dark
            }`}
          >
            £ {invoice.amount}
          </p>
          <div className={styles.status}>
            <span
              className={`${
                invoice.status === 'pending'
                  ? 'pending'
                  : invoice.status === `draft`
                  ? `draft  ${theme === 'dark' && 'dark'}`
                  : invoice.status === 'paid'
                  ? 'paid'
                  : ''
              } ${'defaultStatus'}  ${theme === 'dark' && styles.dark}`}
            >
              {invoice.status}
            </span>
            <img src={arrowRight} alt="arrow-icon" className={styles.arrow} />
          </div>
        </div>
      </div>
    </>
  );
}

export default InvoiceCard;
