import React from 'react';
import Button from '../Button/Button';
import styles from './DeleteDialog.module.css';
import { useTheme } from '../../contexts/ThemeContext';

function DeleteDialog() {
    const {theme} = useTheme()
  return (
    <>
      {' '}
      <div className={`${styles.deleteBox} ${theme === 'dark' && styles.dark}`}>
        <h3 className={`${styles.confirmHead} ${theme === 'dark' && styles.dark}`}>Confirm Deletion</h3>
        <p className={styles.confirmText}>
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>

        <div className={styles.actionBtns}>
          {' '}
          <Button type="button" variant="cancel">
            Cancel
          </Button>
          <Button type="button" variant="delete">
            Delete
          </Button>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}

export default DeleteDialog;
