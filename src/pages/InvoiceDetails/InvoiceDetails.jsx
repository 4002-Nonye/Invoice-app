import React, { useEffect } from 'react';
import styles from './InvoiceDetails.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import InvoiceDetail from '../../components/InvoiceDetail/InvoiceDetail';
import { useParams } from 'react-router-dom';
import { useInvoice } from '../../contexts/InvoiceContext';
function InvoiceDetails() {
  const { id } = useParams();
  const { dispatch } = useInvoice();
  useEffect(() => {
    dispatch({ type: 'INVOICE_ID/CHANGED', payload: id });
  }, [id]);

  return (
    <div className={styles.invoiceDetails}>
      <Sidebar />
      <InvoiceDetail />
    </div>
  );
}

export default InvoiceDetails;
