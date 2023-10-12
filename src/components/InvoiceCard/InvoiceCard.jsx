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
        </div>

        <p className={styles.name}>{invoice.name}</p>
        <div className={styles.right}>
          <p className={styles.amount}>£ {invoice.amount}</p>
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
