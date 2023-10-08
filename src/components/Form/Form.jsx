import React, { useState } from 'react';
import styles from './Form.module.css';
import calendar from '../../assets/calendar.svg';
import ItemList from '../ItemList/ItemList';
import Button from '../Button/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import PaymentTerms from '../PaymentTerms/PaymentTerms';
import { useInvoice } from '../../contexts/InvoiceContext';

function Form({ children }) {
  const {
    date,
    handleInputChange,
    paymentDay,
    senderAddress,
    senderCity,
    senderPostCode,
    senderCountry,
    clientName,
    clientEmail,
    clientAddress,
    clientCity,
    clientPostCode,
    clientCountry,
  } = useInvoice();

  const [isOpen, setIsOpen] = useState(false);

  // function to display/hide Payment terms box
  const handleShowPayment = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}> {children}</h2>
      <form>
        <div className={styles.billFrom}>
          <h3 className={styles.formH3}>Bill From</h3>
          <div className={`${styles.address} ${styles.label}`}>
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              id="streetAddress"
              value={senderAddress}
              onChange={(e) => handleInputChange(e.target.value, 'SENDER_ADDRESS/CHANGED')}
            />
          </div>
          <div className={styles.billFromBtm}>
            <div className={`${styles.city} ${styles.label}`}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={senderCity}
                onChange={(e) => handleInputChange(e.target.value, 'SENDER_CITY/CHANGED')}
              />
            </div>
            <div className={`${styles.postCode} ${styles.label}`}>
              <label htmlFor="postCode">Post Code</label>
              <input
                type="number"
                id="postCode"
                value={senderPostCode}
                onChange={(e) =>
                  handleInputChange(e.target.value, 'SENDER_POSTCODE/CHANGED')
                }
              />
            </div>
            <div className={`${styles.country} ${styles.label}`}>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={senderCountry}
                onChange={(e) => handleInputChange(e.target.value, 'SENDER_COUNTRY/CHANGED')}
              />
            </div>
          </div>
        </div>

        <div className={styles.billTo}>
          <h3 className={styles.formH3}>Bill To</h3>
          <div className={`${styles.client} ${styles.label}`}>
            <label htmlFor="clientName">Client&apos;s Name</label>
            <input
              type="text"
              id="clientName"
              value={clientName}
              onChange={(e) => handleInputChange(e.target.value, 'CLIENT_NAME/CHANGED')}
            />
          </div>
          <div className={`${styles.clientEmail} ${styles.label}`}>
            <label htmlFor="clientEmail">Client&apos;s Email</label>
            <input
              type="text"
              id="clientEmail"
              placeholder="e.g. email@example.com"
              value={clientEmail}
              onChange={(e) => handleInputChange(e.target.value, 'CLIENT_EMAIL/CHANGED')}
            />
          </div>
          <div className={`${styles.clientAddress} ${styles.label}`}>
            <label htmlFor="clientAddress">Street Address</label>
            <input
              type="text"
              id="clientAddress"
              value={clientAddress}
              onChange={(e) => handleInputChange(e.target.value, 'CLIENT_ADDRESS/CHANGED')}
            />
          </div>
          <div className={styles.billFromBtm}>
            <div className={`${styles.city} ${styles.label}`}>
              <label htmlFor="clientCity">City</label>
              <input
                type="text"
                id="clientCity"
                value={clientCity}
                onChange={(e) => handleInputChange(e.target.value, 'CLIENT_CITY/CHANGED')}
              />
            </div>
            <div className={`${styles.postCode} ${styles.label}`}>
              <label htmlFor="clientPostCode">Post Code</label>
              <input
                type="number"
                id="clientPostCode"
                value={clientPostCode}
                onChange={(e) =>
                  handleInputChange(e.target.value, 'CLIENT_POSTCODE/CHANGED')
                }
              />
            </div>
            <div className={`${styles.country} ${styles.label}`}>
              <label htmlFor="clientCountry">Country</label>
              <input
                type="text"
                id="clientCountry"
                value={clientCountry}
                onChange={(e) => handleInputChange(e.target.value, 'CLIENT_COUNTRY/CHANGED')}
              />
            </div>
          </div>
          <div className={styles.billFromBtm}>
            <div className={`${styles.date} ${styles.label}`}>
              <label htmlFor="invoiceDate">Invoice Date</label>
              <div className={styles.dateHolder}>
                <DatePicker
                  id="date"
                  selected={date}
                  onChange={(date) => handleInputChange(date, 'DATE/CHANGED')}
                  dateFormat="dd MMM yyyy"
                  dateFormatCalendar="MMM yyyy"
                />
                <img src={calendar} alt="calendar" />
              </div>
            </div>
            <div
              className={`${styles.terms} ${styles.label}`}
              onClick={handleShowPayment}
              aria-hidden="true"
            >
              <label htmlFor="paymentTerms">Payment Terms</label>
              <p type="text" id="paymentTerms">
                {' '}
                <span>
                  {' '}
                  Net {paymentDay} {paymentDay > 1 ? 'Days' : 'Day'}
                </span>
                <img src={isOpen ? arrowUp : arrowDown} alt="arrow-icon" />
              </p>
              {isOpen && <PaymentTerms setPaymentDay={setPaymentDay} />}
            </div>
          </div>
        </div>

        <div className={`${styles.description} ${styles.label}`}>
          <label htmlFor="description">Project Description</label>
          <input type="text" id="description" />
        </div>
        <div>
          <h3>Item List</h3>
          <ItemList />
        </div>

        <div className={styles.actionBtns}>
          <Button type="button" variant="discard">
            Discard
          </Button>
          <div className={styles.endBtns}>
            <Button type="button" variant="draft">
              Save as Draft
            </Button>
            <Button type="submit" variant="save">
              Save & Send
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
