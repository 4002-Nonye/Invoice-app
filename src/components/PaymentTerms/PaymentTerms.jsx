import React from 'react';
import styles from './PaymentTerms.module.css';
import { useForm } from '../../contexts/FormContext';
import { useTheme } from '../../contexts/ThemeContext';

const days = ['1', '7', '14', '30'];
function PaymentTerms() {
  const { handlePaymentTerms } = useForm();
  const {theme} = useTheme()
  return (
    <div className={`${styles.terms} ${theme === 'dark' && styles.dark}`}>
      {days.map((day, index) => (
        <p
          key={index}
          className={`${styles.day} ${theme === 'dark' && styles.dark}`}
          onClick={() =>handlePaymentTerms(day) }
        >
          Net <span>{day}</span> {day > 1 ? 'Days' : 'Day'}
        </p>
      ))}
    </div>
  );
}

export default PaymentTerms;
