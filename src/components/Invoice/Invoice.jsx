import React from 'react';
import styles from './Invoice.module.css';
import add from '../../assets/add.svg';
import NoInvoice from '../NoInvoice/NoInvoice';
import { useInvoice } from '../../contexts/InvoiceContext';
import Filter from '../Filter/Filter';
import InvoiceCard from '../InvoiceCard/InvoiceCard';
import { Link } from 'react-router-dom';
import { useForm } from '../../contexts/FormContext';

function Invoice() {
  const { invoices, status } = useInvoice();
  const { handleOpenForm } = useForm();

  // filter invoices according to invoice status
  const FilteredInvoices = invoices.filter((invoice) => {
    if (!status) return invoice;
    return invoice.status === status;
  });

  return (
    <div className={styles.invoice}>
      <div className={styles.invoiceHeadWrapper}>
        <div className={styles.invoiceHead}>
          <h1>Invoices</h1>
          <span>
            {invoices.length > 0
              ? `There  ${FilteredInvoices.length > 1 ? 'are' : 'is'} ${
                  FilteredInvoices.length
                } total ${FilteredInvoices.length > 1 ? 'invoices' : 'invoice'}`
              : 'No invoices'}
          </span>
        </div>

        <div className={styles.rightHead}>
          <Filter />
          <button
            type="button"
            className={styles.addInvoice}
            onClick={handleOpenForm}
          >
            <img src={add} alt="add-icon" />
            <span>New <span className={styles.mobileInvoice}>Invoice</span></span>
          </button>
        </div>
      </div>

      {!invoices.length && <NoInvoice />}

      {invoices && (
        <div className={styles.invoiceWrapper}>
          {FilteredInvoices.map((invoice) => (
            <Link to={`/invoice/${invoice.id}`} key={invoice.id}>
              <InvoiceCard invoice={invoice} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Invoice;
