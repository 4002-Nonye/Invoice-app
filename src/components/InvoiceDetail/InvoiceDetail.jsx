import React, { useEffect } from 'react';
import styles from './InvoiceDetail.module.css';
import arrowLeft from '../../assets/arrow-left.svg';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate, useParams } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';
import Address from '../Address/Address';
import DeleteDialog from '../DeleteDialog/DeleteDialog';
import { useInvoice } from '../../contexts/InvoiceContext';
import Skeleton from 'react-loading-skeleton';
import useDateFormatter from '../../hooks/useDateFormatter';
import { useForm } from '../../contexts/FormContext';

// const invoiceDetail = {/   id: 'XM9140',
//   senderAddress: `19 Union Terrace`,
//   senderPostCode: 'E1 3EZ',
//   senderCity: 'London',
//   senderCountry: 'United Kingdom',
//   dueDate: '20 Sep 2021',
//   name: 'Alysa Werner',
//   status: 'draft',
//   amount: '4,032.33',
//   description: 'Graphic Design',
//   invoiceDate: '21 Aug 2021',
//   paymentDue: '20 Sep 2021',
//   client: 'Alex Grim',
//   clientAddress: `84 Church Way`,
//   clientPostCode: ' BD1 9PB',
//   clientCity: 'Bradford',
//   clientCountry: 'United Kingdom',
//   clientEmail: 'alexgrim@mail.com',
//   itemList: [
//     {
//       id: uuidv4(),
//       name: 'Banner Design',
//       qty: 1,
//       price: 13356.0,
//       total: 156905.0,
//     },
//     {
//       id: uuidv4(),
//       name: 'Banner Design',
//       qty: 1,
//       price: 156.0,
//       total: 156.0,
//     },
//   ],
// };
function InvoiceDetail() {
  const { invoiceDetail } = useInvoice();
  const { theme } = useTheme();
  const navigate = useNavigate();


  // function to handle navigation to home page
  const handleGoHome = () => {
    navigate('/');
  };

  // sum up total of all items 
  const total = invoiceDetail?.itemList?.reduce((prev, acc) => prev + Number(acc.total),0);
 
    // function to convert number

    const convertNumber = (num) =>
    Number(num).toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });



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
              invoiceDetail.status === 'pending'
                ? 'pending'
                : invoiceDetail.status === 'draft'
                ? `draft  ${theme === 'dark' && 'dark'}`
                : invoiceDetail.status === 'paid'
                ? 'paid'
                : ''
            } ${'defaultStatus'}`}
          >
            {invoiceDetail.status}
          </span>
        </div>

        <div className={styles.cta}>
          {invoiceDetail.status !== 'paid' && (
            <Button type="button" variant="edit">
              Edit
            </Button>
          )}
          <Button type="button" variant="delete">
            Delete
          </Button>{' '}
          {invoiceDetail.status !== 'paid' &&
            invoiceDetail.status !== 'draft' && (
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
              {invoiceDetail.userId}
              <span
                className={`${styles.description} ${
                  theme === 'dark' && styles.dark
                }`}
              >
                {invoiceDetail.description}
              </span>
            </p>
            <Address
              className="senderAddress"
              address={invoiceDetail.senderAddress}
              city={invoiceDetail.senderCity}
              postCode={invoiceDetail.senderPostCode}
              country={invoiceDetail.senderCountry}
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
                    {invoiceDetail.invoiceDate}
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
                   {useDateFormatter(invoiceDetail.invoiceDate,invoiceDetail.paymentDay)}
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
                  {invoiceDetail.name}
                </p>
                <Address
                  className="clientAddress"
                  address={invoiceDetail.clientAddress}
                  city={invoiceDetail.clientCity}
                  postCode={invoiceDetail.clientPostCode}
                  country={invoiceDetail.clientCountry}
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
                {invoiceDetail.clientEmail}
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
              {invoiceDetail?.itemList?.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </tbody>
          </table>
          <div
            className={`${styles.amountDue} ${theme === 'dark' && styles.dark}`}
          >
            <p>Amount Due</p>
            <p>£ {convertNumber(total)}</p>
          </div>
        </div>
      </div>
      {/* <DeleteDialog/> */}
    </div>
  );
}

export default InvoiceDetail;
