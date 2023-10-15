import React from 'react';
import styles from './Button.module.css';
import { useTheme } from '../../contexts/ThemeContext';

function Button({ btnClass, children, variant, type, onClick }) {
  const { theme } = useTheme();
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${btnClass} ${styles[variant]} ${styles.btn} ${
        theme === 'dark' && styles.dark
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
