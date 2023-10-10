import React from 'react';
import styles from './PaymentTerms.module.css';
import { useInvoice } from '../../contexts/InvoiceContext';

const days = ['1', '7', '14', '30'];
function PaymentTerms() {
  const { handlePaymentTerms } = useInvoice();
  return (
    <div className={styles.terms}>
      {days.map((day, index) => (
        <p
          key={index}
          className={styles.day}
          onClick={() =>handlePaymentTerms(day) }
        >
          Net <span>{day}</span> {day > 1 ? 'Days' : 'Day'}
        </p>
      ))}
    </div>
  );
}

export default PaymentTerms;
