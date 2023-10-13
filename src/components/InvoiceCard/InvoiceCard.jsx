/* eslint-disable react/prop-types */
import React from 'react';
import styles from './InvoiceCard.module.css';
import arrowRight from '../../assets/arrow-right.svg';

function InvoiceCard({ invoice }) {
  return (
    <>
      <div className={styles.invoiceItem}>
        <div className={styles.left}>
          <p className={`id`}>
            <span className={`hash`}> #</span>
            {invoice.id}
          </p>
          <p className={styles.dueDate}>
            Due <span className={styles.date}>{invoice.dueDate}</span>
          </p>
          <p className={`${styles.name} ${styles.desktopName}`}>{invoice.name}</p>
          <p className={`${styles.amount} ${styles.mobileAmount}`}>£ {invoice.amount}</p>
        </div>

     
        <div className={styles.right}>
        <p className={`${styles.name} ${styles.mobileName}`}>{invoice.name}</p>
          <p className={`${styles.amount} ${styles.desktopAmount}`}>£ {invoice.amount}</p>
          <div className={styles.status}>
            <span
              className={`${
                invoice.status === 'pending'
                  ? 'pending'
                  : invoice.status === 'draft'
                  ? 'draft'
                  : invoice.status === 'paid'
                  ? 'paid'
                  : ''
              } ${'defaultStatus'}`}
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
