import React from 'react';
import styles from './Invoice.module.css';
import add from '../../assets/add.svg';
import NoInvoice from '../NoInvoice/NoInvoice';
import { useInvoice } from '../../contexts/InvoiceContext';
import Filter from '../Filter/Filter';
import InvoiceCard from '../InvoiceCard/InvoiceCard';

function Invoice() {
  const { invoices } = useInvoice();
  return (
    <div className={styles.invoice}>
      <div className={styles.invoiceHeadWrapper}>
        <div className={styles.invoiceHead}>
          <h1>Invoices</h1>
          <span>
            {invoices.length > 0
              ? `There are ${invoices.length} total ${
                  invoices.length > 1 ? 'invoices' : 'invoice'
                }`
              : 'No invoices'}
          </span>
        </div>

        <div className={styles.rightHead}>
          <Filter />
          <button type="button" className={styles.addInvoice}>
            <img src={add} alt="add-icon" />
            <span>New Invoice</span>
          </button>
        </div>
      </div>

      {!invoices.length && <NoInvoice />}

      {invoices && (
        <ul>
          {invoices.map((invoice) => (
            <InvoiceCard key={invoice.id} invoice={invoice} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Invoice;
