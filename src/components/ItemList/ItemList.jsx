import React from 'react';
import styles from './ItemList.module.css';
import deleteIcon from '../../assets/delete.svg';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from '../../contexts/FormContext';
function ItemList() {
  const { handleAddItem, itemList, handleItemValueChange, handleDeleteItem } =
    useForm();

  // new object to be added to itemList arr
  const newItem = {
    id: uuidv4(),
    name: '',
    qty: '',
    price: '',
    total: 0,
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

        {itemList.map((item) => (
          <div key={item.id} className={styles.data}>
            {' '}
            <input
              type="text"
              className={styles.itemName}
              value={item.name}
              onChange={(e) => handleItemValueChange(e, item.id, 'name')}
            />
            <input
              type="number"
              className={styles.qty}
              value={item.qty}
              onChange={(e) => handleItemValueChange(e, item.id, 'qty')}
            />
            <input
              type="number"
              className={styles.price}
              value={item.price}
              onChange={(e) => handleItemValueChange(e, item.id, 'price')}
            />
            <p className={styles.total}>{item.total}</p>
            <img
              src={deleteIcon}
              alt="delete"
              className={styles.delete}
              onClick={() => handleDeleteItem(item.id)}
            />
          </div>
        ))}
      </div>
      <Button
        type="button"
        variant="add"
        onClick={() => handleAddItem(newItem)}
      >
        {' '}
        + Add New Item
      </Button>
    </>
  );
}

export default ItemList;
