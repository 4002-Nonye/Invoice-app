import React, { Suspense } from 'react';
import styles from './Invoice.module.css';
import add from '../../assets/add.svg';
import NoInvoice from '../NoInvoice/NoInvoice';
import { useInvoice } from '../../contexts/InvoiceContext';
import Filter from '../Filter/Filter';
import InvoiceCard from '../InvoiceCard/InvoiceCard';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Skeleton from 'react-loading-skeleton';

function Invoice() {
  const { invoices, status, isLoading } = useInvoice();
  const { handleOpenForm } = useInvoice();
  const { theme } = useTheme();

  // filter invoices according to invoice status
  const FilteredInvoices = invoices.filter((invoice) => {
    if (!status) return invoice;
    return invoice.status === status;
  });

  return (
    <div className={styles.invoice}>
      <div
        className={`${styles.invoiceHeadWrapper}  ${
          theme === 'dark' && styles.dark
        }`}
      >
        <div
          className={`${styles.invoiceHead}  ${
            theme === 'dark' && styles.dark
          }`}
        >
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
            <span>
              New <span className={styles.mobileInvoice}>Invoice</span>
            </span>
          </button>
        </div>
      </div>

      {invoices.length === 0 && !isLoading && <NoInvoice />}

      {invoices && (
        <div className={styles.invoiceWrapper}>
          {isLoading ? (
            <Skeleton
              className={styles.loader}
              count={3}
              height={60}
              highlightColor="#494e6e"
            />
          ) : (
            FilteredInvoices.map((invoice) => (
              <div key={invoice.id}>
                <>
                  <Link to={`/invoice/${invoice.userId}`}>
                    <InvoiceCard invoice={invoice} />
                  </Link>
                </>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Invoice;
