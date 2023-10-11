import React from 'react';
import styles from './InvoiceDetails.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import InvoiceDetail from '../../components/InvoiceDetail/InvoiceDetail';
function InvoiceDetails() {
  return (
    <div className={styles.invoiceDetails}>
      <Sidebar />
      <InvoiceDetail />
    </div>
  );
}

export default InvoiceDetails;
