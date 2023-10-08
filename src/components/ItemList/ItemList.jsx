import React, { useState } from 'react';
import styles from './ItemList.module.css';
import deleteIcon from '../../assets/delete.svg';
import Button from '../Button/Button';
function ItemList() {
  const [row, setRow] = useState(1);

  const handleAddItem = () => {
    setRow((row) => row + 1);
  };
  return (
    <>
      <div className={styles.itemList}>
        <div className={styles.fields}>
          <p className={styles.itemName}>Item Name</p>
          <p className={styles.qty}>Qty.</p>
          <p className={styles.price}>Price</p>
          <p className={styles.total}>Total</p>
          <p></p>
        </div>

        {Array.from({ length: row }, (_, i) => (
          <div key={i} className={styles.data}>
            {' '}
            <input type="text" className={styles.itemName} />
            <input type="number" className={styles.qty} />
            <input type="number" className={styles.price} />
            <p className={styles.total}>30</p>
            <img src={deleteIcon} alt="delete" className={styles.delete} />
          </div>
        ))}
      </div>
      <Button type="button" variant="add" onClick={handleAddItem}>
        {' '}
        + Add New Item
      </Button>
    </>
  );
}

export default ItemList;
