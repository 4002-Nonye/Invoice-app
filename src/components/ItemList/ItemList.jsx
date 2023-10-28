import React from 'react';
import styles from './ItemList.module.css';
import deleteIcon from '../../assets/delete.svg';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from '../../contexts/FormContext';
import { useTheme } from '../../contexts/ThemeContext';
function ItemList() {
  const { handleAddItem, itemList, handleItemValueChange, handleDeleteItem } =
    useForm();
  const { theme } = useTheme();

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
        <div
          className={`${styles.fields} ${styles.terms} ${
            theme === 'dark' && styles.dark
          }`}
        >
          <p className={styles.itemName}>Item Name</p>
          <p className={styles.qty}>Qty.</p>
          <p className={styles.price}>Price</p>
          <p className={styles.total}>Total</p>
          <p></p>
        </div>

        {itemList.map((item) => (
          <div key={item.id} className={styles.data}>
            <div>
              <div className={styles.itemNameWrapper}>
                <label
                  className={`${styles.mobileLabel} ${styles.terms} ${
                    theme === 'dark' && styles.dark
                  }`}
                  htmlFor="itemName"
                >
                  Item Name
                </label>
                <input
                  id="itemName"
                  type="text"
                  className={` ${styles.itemName} ${
                    theme === 'dark' && styles.dark
                  }`}
                  value={item.name}
                  onChange={(e) => handleItemValueChange(e, item.id, 'name')}
                />
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <label className={styles.mobileLabel} htmlFor="itemQty">
                  Qty.
                </label>
                <input
                  id="itemQty"
                  type="number"
                  className={` ${styles.qty} ${
                    theme === 'dark' && styles.dark
                  }`}
                  value={item.qty}
                  onChange={(e) => handleItemValueChange(e, item.id, 'qty')}
                />
              </div>

              <div>
                <label className={styles.mobileLabel} htmlFor="itemPrice">
                  Price
                </label>

                <input
                  id="itemPrice"
                  type="number"
                  className={` ${styles.price} ${
                    theme === 'dark' && styles.dark
                  }`}
                  value={item.price}
                  onChange={(e) => handleItemValueChange(e, item.id, 'price')}
                />
              </div>
              <div>
                <h4 className={styles.mobileLabel}>Total</h4>
                <p
                  className={`${styles.total}  ${
                    theme === 'dark' && styles.dark
                  }`}
                >
                  {item.total}
                </p>
              </div>

              <div
                className={styles.delete}
                onClick={() => handleDeleteItem(item.id)}
              >
                <img src={deleteIcon} alt="delete" />
              </div>
            </div>
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
