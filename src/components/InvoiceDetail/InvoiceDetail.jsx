import React from 'react';
import styles from './InvoiceDetail.module.css';
import arrowLeft from '../../assets/arrow-left.svg';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
const invoice = {
  id: 'XM9140',
  senderAddress: `19 Union Terrace`,
  senderPostCode: 'E1 3EZ',
  senderCity: 'London',
  senderCountry: 'United Kingdom',
  dueDate: '20 Sep 2021',
  name: 'Alysa Werner',
  status: 'pending',
  amount: '4,032.33',
  description: 'Graphic Design',
  invoiceDate: '21 Aug 2021',
  paymentDue: '20 Sep 2021',
  client: 'Alex Grim',
  clientAddress: `84 Church Way`,
  clientPostCode: ' BD1 9PB',
  clientCity: 'Bradford',
  clientCountry: 'United Kingdom',
  clientEmail: 'alexgrim@mail.com',
  itemList: [
    {
      id: uuidv4(),
      name: 'Banner Design',
      qty: 1,
      price: 13356.0,
      total: 156905.0,
    },
    {
      id: uuidv4(),
      name: 'Banner Designbshsu 8 eeuhd ujs',
      qty: 1,
      price: 156.0,
      total: 156.0,
    },
    {
      id: uuidv4(),
      name: 'Banner Designbshsu 8 eeuhd ujs',
      qty: 1,
      price: 156.0,
      total: 156.0,
    },
    {
      id: uuidv4(),
      name: 'Banner Designbshsu 8 eeuhd ujs',
      qty: 1,
      price: 156.0,
      total: 156.0,
    },
  ],
};
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
          <span> status</span>
          <span
            className={`${
              invoice.status === 'pending'
                ? 'pending'
                : invoice.status === 'draft'
                ? 'draft'
                : invoice.status === 'paid'
                ? 'paid'
                : ''
            } ${'defaultStatus'}`}
          >
            {invoice.status}
          </span>
        </div>

        <div className={styles.cta}>
          {invoice.status !== 'paid' && (
            <Button type="button" variant="edit">
              Edit
            </Button>
          )}
          <Button type="button" variant="delete">
            Delete
          </Button>{' '}
          {invoice.status !== 'paid' && invoice.status !== 'draft' && (
            <Button type="button" variant="paid">
              Mark as Paid
            </Button>
          )}
        </div>
      </div>
      <div>
        <div className={styles.invoiceInfoWrapper}>
          <div className={styles.topInfo}>
            <p className={` id`}>
              <span className={` hash`}> #</span>
              {invoice.id}
              <span className={styles.description}>{invoice.description}</span>
            </p>
            <div className={`${styles.address} ${styles.senderAddress}`}>
              <span>{invoice.senderAddress}</span>
              <span>{invoice.senderCity}</span>
              <span>{invoice.senderPostCode}</span>
              <span>{invoice.senderCountry}</span>
            </div>
          </div>

          <div className={styles.midInfo}>
            <div className={styles.flex}>
              <div className={styles.column}>
                <div className={styles.dateWrapper}>
                  <p className={`${styles.headText}`}>Invoice Date</p>
                  <p className={styles.dateNameEmail}>{invoice.dueDate}</p>
                </div>
                <div className={styles.paymentDue}>
                  <p className={`${styles.headText}`}>Payment Due</p>
                  <p className={styles.dateNameEmail}>20 Sep 2021 </p>
                </div>
              </div>

              <div className={styles.dateWrapper}>
                <p className={`${styles.headText}`}>Bill To</p>
                <p className={`${styles.dateNameEmail} ${styles.name}`}>
                  {invoice.name}
                </p>
                <div
                  className={`${styles.address} ${styles.clientAddress} ${styles.text}`}
                >
                  <span>{invoice.clientAddress}</span>
                  <span>{invoice.clientCity}</span>
                  <span>{invoice.clientPostCode}</span>
                  <span>{invoice.clientCountry}</span>
                </div>
              </div>
            </div>
            <div>
              <p className={`${styles.headText}`}>Sent to</p>
              <p className={styles.dateNameEmail}>{invoice.clientEmail}</p>
            </div>
          </div>

          <table className={styles.itemWrapper}>
            <thead>
              <tr className={styles.fields}>
                <th className={styles.textLeft}>Item Name</th>
                <th className={styles.textCenter}>QTY.</th>
                <th className={styles.textRight}>Price</th>
                <th className={styles.textRight}>Total</th>
              </tr>
            </thead>

            <tbody>
              {invoice.itemList.map((item) => (
                <tr key={item.id} className={styles.fieldValues}>
                  <td className={`${styles.textLeft} ${styles.name}`}>
                    {item.name}
                  </td>
                  <td className={`${styles.textCenter} ${styles.qty}`}>
                    {item.qty}
                  </td>
                  <td className={`${styles.textRight} ${styles.price}`}>
                    £{' '}
                    {item.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                  <td className={`${styles.textRight} ${styles.total}`}>
                    £{' '}
                    {item.total.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.amountDue}>
            <p>Amount Due</p>
            <p>£ 556.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetail;
