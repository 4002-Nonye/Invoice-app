/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ItemCard.module.css';
import { useTheme } from '../../contexts/ThemeContext';

function ItemCard({ item }) {
  const { theme } = useTheme();

  // function to convert number

  const convertNumber = (num) =>
    num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });

  return (
    <tr key={item.id} className={styles.fieldValues}>
      <td
        className={`${styles.textLeft} ${styles.name}  ${
          theme === 'dark' && styles.dark
        }`}
      >
        {item.name}
        <span className={styles.mobileData}>
          {item.qty} x £ {convertNumber(item.price)}
        </span>
      </td>
      <td
        className={`${styles.textCenter} ${styles.qty}  ${
          theme === 'dark' && styles.dark
        }`}
      >
        {item.qty}
      </td>
      <td
        className={`${styles.textRight} ${styles.price}  ${
          theme === 'dark' && styles.dark
        }`}
      >
        £ {convertNumber(item.price)}
      </td>
      <td
        className={`${styles.textRight} ${styles.total}  ${
          theme === 'dark' && styles.dark
        }`}
      >
        £ {convertNumber(item.total)}{' '}
      </td>
    </tr>
  );
}

export default ItemCard;
