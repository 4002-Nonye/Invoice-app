import React from 'react';
import styles from './Button.module.css';

function Button({ btnClass, children, variant, type, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${btnClass} ${styles[variant]} ${styles.btn}`}
    >
      {children}
    </button>
  );
}

export default Button;
