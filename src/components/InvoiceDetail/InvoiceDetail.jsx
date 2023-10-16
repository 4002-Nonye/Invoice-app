import React from 'react';
import styles from './InvoiceDetail.module.css';
import arrowLeft from '../../assets/arrow-left.svg';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import Address from '../Address/Address';
const invoice = {
  id: 'XM9140',
  senderAddress: `19 Union Terrace`,
  senderPostCode: 'E1 3EZ',
  senderCity: 'London',
  senderCountry: 'United Kingdom',
  dueDate: '20 Sep 2021',
  name: 'Alysa Werner',
  status: 'draft',
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
      name: 'Banner Design',
      qty: 1,
      price: 156.0,
      total: 156.0,
    },
  ],
};
function InvoiceDetail() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  // function to handle navigation to home page
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.invoiceDetail}>
      <Button
        btnClass={`${styles.btnBack}  ${theme === 'dark' && styles.dark}`}
        type="button"
        onClick={handleGoHome}
      >
        <span>
          <img src={arrowLeft} alt="arrow-icon" />
        </span>
        Go back
      </Button>

      <div className={`${styles.head} ${theme === 'dark' && styles.dark}`}>
        <div className={styles.status}>
          <span> status</span>
          <span
            className={`${
              invoice.status === 'pending'
                ? 'pending'
                : invoice.status === 'draft'
                ? `draft  ${theme === 'dark' && 'dark'}`
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
        <div
          className={`${styles.invoiceInfoWrapper} ${
            theme === 'dark' && styles.dark
          } `}
        >
          <div className={styles.topInfo}>
            <p className={`id  ${theme === 'dark' && 'dark'}`}>
              <span className={` hash`}> #</span>
              {invoice.id}
              <span
                className={`${styles.description} ${
                  theme === 'dark' && styles.dark
                }`}
              >
                {invoice.description}
              </span>
            </p>
            <Address
              className="senderAddress"
              address={invoice.senderAddress}
              city={invoice.senderCity}
              postCode={invoice.senderPostCode}
              country={invoice.senderCountry}
            />
          </div>

          <div className={styles.midInfo}>
            <div className={styles.flex}>
              <div className={styles.column}>
                <div className={styles.dateWrapper}>
                  <p
                    className={`${styles.headText}  ${
                      theme === 'dark' && styles.dark
                    }`}
                  >
                    Invoice Date
                  </p>
                  <p
                    className={`${styles.dateNameEmail}  ${
                      theme === 'dark' && styles.dark
                    }`}
                  >
                    {invoice.dueDate}
                  </p>
                </div>
                <div className={styles.paymentDue}>
                  <p
                    className={`${styles.headText}  ${
                      theme === 'dark' && styles.dark
                    }`}
                  >
                    Payment Due
                  </p>
                  <p
                    className={`${styles.dateNameEmail}  ${
                      theme === 'dark' && styles.dark
                    }`}
                  >
                    20 Sep 2021{' '}
                  </p>
                </div>
              </div>

              <div className={styles.dateWrapper}>
                <p
                  className={`${styles.headText}  ${
                    theme === 'dark' && styles.dark
                  }`}
                >
                  Bill To
                </p>
                <p
                  className={`${styles.dateNameEmail}  ${
                    theme === 'dark' && styles.dark
                  } ${styles.name}`}
                >
                  {invoice.name}
                </p>
                <Address
                  className="clientAddress"
                  address={invoice.clientAddress}
                  city={invoice.clientCity}
                  postCode={invoice.clientPostCode}
                  country={invoice.clientCountry}
                />
              </div>
            </div>
            <div>
              <p
                className={`${styles.headText}  ${
                  theme === 'dark' && styles.dark
                }`}
              >
                Sent to
              </p>
              <p
                className={`${styles.dateNameEmail}  ${
                  theme === 'dark' && styles.dark
                }`}
              >
                {invoice.clientEmail}
              </p>
            </div>
          </div>

          <table
            className={`${styles.itemWrapper} ${
              theme === 'dark' && styles.dark
            }`}
          >
            <thead>
              <tr
                className={`${styles.fields}  ${
                  theme === 'dark' && styles.dark
                }`}
              >
                <th className={styles.textLeft}>Item Name</th>
                <th className={styles.textCenter}>QTY.</th>
                <th className={styles.textRight}>Price</th>
                <th className={styles.textRight}>Total</th>
              </tr>
            </thead>

            <tbody>
              {invoice.itemList.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </tbody>
          </table>
          <div
            className={`${styles.amountDue} ${theme === 'dark' && styles.dark}`}
          >
            <p>Amount Due</p>
            <p>£ 556.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetail;
