import React from 'react';
import styles from './PaymentTerms.module.css';

const days = ['1', '7', '14', '30'];
function PaymentTerms({ setPaymentDay }) {
  return (
    <div className={styles.terms}>
      {days.map((day, index) => (
        <p
          key={index}
          className={styles.day}
          onClick={() => setPaymentDay(day)}
        >
          Net <span>{day}</span> {day > 1 ? 'Days' : 'Day'}
        </p>
      ))}
    </div>
  );
}

export default PaymentTerms;
