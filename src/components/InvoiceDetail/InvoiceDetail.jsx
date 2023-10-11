import React from 'react';
import styles from './InvoiceDetail.module.css';
import arrowLeft from '../../assets/arrow-left.svg';
import Button from '../Button/Button';
function InvoiceDetail() {
  return (
    <div className={styles.invoiceDetail}>
      <Button btnClass={styles.btnBack} type="button">
        <span>
          <img src={arrowLeft} alt="arrow-icon" />
        </span>
        Go back
      </Button>

      <div className={styles.head}>
        <div className={styles.status}>
          status <span>Pending</span>
        </div>

        <div className={styles.cta}>
          <Button type="button" variant="edit">
            Edit
          </Button>
          <Button type="button" variant="delete">
            Delete
          </Button>{' '}
          <Button type="button" variant="paid">
            Mark as Paid
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetail;
