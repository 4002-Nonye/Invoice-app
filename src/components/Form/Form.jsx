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
import { useForm } from '../../contexts/FormContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useInvoice } from '../../contexts/InvoiceContext';
import useId from '../../hooks/useId';
import Message from '../Message/Message';


function Form({ children }) {
  const {
    date,
    handleInputChange,
    paymentDay,
    sender,
    client,
    description,
    handleReset,
    itemList
  } = useForm();
  const { invoiceFormisOpen, formError } = useInvoice();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const { handleSubmit, handleDiscard } = useInvoice();

  // new invoice to be added to invoices array
  const newInvoiceObj = {
    userId: useId(),
    ...client,
    ...sender,
    description,
    status: 'pending',
    paymentDay,
    itemList,
    invoiceDate: date
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
      .replace(',', ''),
  };

  // function to display/hide Payment terms box
  const handleShowPayment = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      {' '}
      <div
        className={`${styles.form}  ${invoiceFormisOpen && styles.open}  ${
          theme === 'dark' && styles.dark
        }`}
      >
        <h2 className={` ${styles.title} ${theme === 'dark' && styles.dark}`}>
          {' '}
          {children}
        </h2>
        <form>
          <div className={styles.billFrom}>
            <h3 className={styles.formH3}>Bill From</h3>
            <div className={`${styles.address} ${styles.label}`}>
              <label
                htmlFor="streetAddress"
                className={` ${styles.label} ${
                  theme === 'dark' && styles.dark
                }`}
              >
                Street Address
              </label>
              <input
                className={` ${theme === 'dark' && styles.dark}`}
                type="text"
                id="streetAddress"
                value={sender.senderAddress}
                onChange={(e) => {
                  handleInputChange(e.target.value, 'SENDER_ADDRESS/CHANGED');
                }}
              />
            </div>

            <div className={`${styles.billFromBtm} ${styles.fromRow}`}>
              <div className={styles.cityPostCode}>
                <div className={`${styles.city} ${styles.label}`}>
                  <label
                    className={` ${styles.label} ${
                      theme === 'dark' && styles.dark
                    }`}
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    className={` ${theme === 'dark' && styles.dark}`}
                    type="text"
                    id="city"
                    value={sender.senderCity}
                    onChange={(e) =>
                      handleInputChange(e.target.value, 'SENDER_CITY/CHANGED')
                    }
                  />
                </div>

                <div className={`${styles.postCode} ${styles.label}`}>
                  <label
                    className={` ${styles.label} ${
                      theme === 'dark' && styles.dark
                    }`}
                    htmlFor="postCode"
                  >
                    Post Code
                  </label>
                  <input
                    className={` ${theme === 'dark' && styles.dark}`}
                    type="text"
                    id="postCode"
                    value={sender.senderPostCode}
                    onChange={(e) =>
                      handleInputChange(
                        e.target.value,
                        'SENDER_POSTCODE/CHANGED'
                      )
                    }
                  />
                </div>
              </div>{' '}
              <div className={`${styles.country} ${styles.label}`}>
                <label
                  className={` ${styles.label} ${
                    theme === 'dark' && styles.dark
                  }`}
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  className={` ${theme === 'dark' && styles.dark}`}
                  type="text"
                  id="country"
                  autoComplete="true"
                  value={sender.senderCountry}
                  onChange={(e) =>
                    handleInputChange(e.target.value, 'SENDER_COUNTRY/CHANGED')
                  }
                />
              </div>
            </div>
          </div>

          <div className={styles.billTo}>
            <h3 className={styles.formH3}>Bill To</h3>
            <div className={`${styles.client} ${styles.label}`}>
              <label
                className={` ${styles.label} ${
                  theme === 'dark' && styles.dark
                }`}
                htmlFor="clientName"
              >
                Client&apos;s Name
              </label>
              <input
                className={` ${theme === 'dark' && styles.dark}`}
                type="text"
                id="clientName"
                value={client.name}
                onChange={(e) =>
                  handleInputChange(e.target.value, 'CLIENT_NAME/CHANGED')
                }
              />
            </div>
            <div className={`${styles.clientEmail} ${styles.label}`}>
              <label
                className={` ${styles.label} ${
                  theme === 'dark' && styles.dark
                }`}
                htmlFor="clientEmail"
              >
                Client&apos;s Email
              </label>
              <input
                className={` ${theme === 'dark' && styles.dark}`}
                type="text"
                id="clientEmail"
                placeholder="e.g. email@example.com"
                value={client.clientEmail}
                onChange={(e) =>
                  handleInputChange(e.target.value, 'CLIENT_EMAIL/CHANGED')
                }
              />
            </div>
            <div className={`${styles.clientAddress} ${styles.label}`}>
              <label
                className={` ${styles.label} ${
                  theme === 'dark' && styles.dark
                }`}
                htmlFor="clientAddress"
              >
                Street Address
              </label>
              <input
                className={` ${theme === 'dark' && styles.dark}`}
                type="text"
                id="clientAddress"
                value={client.clientAddress}
                onChange={(e) =>
                  handleInputChange(e.target.value, 'CLIENT_ADDRESS/CHANGED')
                }
              />
            </div>
            <div className={`${styles.billFromBtm} ${styles.fromRow}`}>
              <div className={styles.cityPostCode}>
                <div className={`${styles.city} ${styles.label}`}>
                  <label
                    className={` ${styles.label} ${
                      theme === 'dark' && styles.dark
                    }`}
                    htmlFor="clientCity"
                  >
                    City
                  </label>
                  <input
                    className={` ${theme === 'dark' && styles.dark}`}
                    type="text"
                    id="clientCity"
                    value={client.clientCity}
                    onChange={(e) =>
                      handleInputChange(e.target.value, 'CLIENT_CITY/CHANGED')
                    }
                  />
                </div>
                <div className={`${styles.postCode} ${styles.label}`}>
                  <label
                    className={` ${styles.label} ${
                      theme === 'dark' && styles.dark
                    }`}
                    htmlFor="clientPostCode"
                  >
                    Post Code
                  </label>
                  <input
                    className={` ${theme === 'dark' && styles.dark}`}
                    type="text"
                    id="clientPostCode"
                    value={client.clientPostCode}
                    onChange={(e) =>
                      handleInputChange(
                        e.target.value,
                        'CLIENT_POSTCODE/CHANGED'
                      )
                    }
                  />
                </div>
              </div>
              <div className={`${styles.country} ${styles.label}`}>
                <label
                  className={` ${styles.label} ${
                    theme === 'dark' && styles.dark
                  }`}
                  htmlFor="clientCountry"
                >
                  Country
                </label>
                <input
                  className={` ${theme === 'dark' && styles.dark}`}
                  type="text"
                  id="clientCountry"
                  value={client.clientCountry}
                  onChange={(e) =>
                    handleInputChange(e.target.value, 'CLIENT_COUNTRY/CHANGED')
                  }
                />
              </div>
            </div>
            <div className={`${styles.billFromBtm} ${styles.termsDate}`}>
              <div className={`${styles.date} ${styles.label}`}>
                <label
                  className={` ${styles.label} ${
                    theme === 'dark' && styles.dark
                  }`}
                  htmlFor="invoiceDate"
                >
                  Invoice Date
                </label>
                <div
                  className={`${styles.dateHolder} ${
                    theme === 'dark' && styles.dark
                  }`}
                >
                  <DatePicker
                    calendarClassName={` wrapper ${theme === 'dark' && 'dark'}`}
                    className={` ${theme === 'dark' && styles.dark}`}
                    id="invoiceDate"
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
                <h4
                  className={`${styles.PaymentTerms} ${styles.terms} ${
                    theme === 'dark' && styles.dark
                  }`}
                >
                  Payment Terms
                </h4>
                <p
                  type="text"
                  id="paymentTerms"
                  className={`${theme === 'dark' && styles.dark}`}
                >
                  {' '}
                  <span>
                    {' '}
                    Net {paymentDay} {paymentDay > 1 ? 'Days' : 'Day'}
                  </span>
                  <img src={isOpen ? arrowUp : arrowDown} alt="arrow-icon" />
                </p>
                {isOpen && <PaymentTerms />}
              </div>
            </div>
          </div>

          <div className={`${styles.description} ${styles.label}`}>
            <label
              className={` ${styles.label} ${theme === 'dark' && styles.dark}`}
              htmlFor="description"
            >
              Project Description
            </label>
            <input
              className={` ${theme === 'dark' && styles.dark}`}
              type="text"
              id="description"
              placeholder="e.g. Graphic Design Service"
              value={description}
              onChange={(e) =>
                handleInputChange(e.target.value, 'DESCRIPTION/CHANGED')
              }
            />
          </div>
          <div>
            <h3 className={styles.itemList}>Item List</h3>
            <ItemList />
          </div>

          <div className={styles.actionBtns}>
            <Button
              onClick={() => {
                handleDiscard();
                handleReset();
              }}
              type="button"
              variant="discard"
            >
              Discard
            </Button>
            <div className={styles.endBtns}>
              <Button type="button" variant="draft">
                Save as Draft
              </Button>
              <Button
                onClick={(e) => {
                  handleSubmit(e, newInvoiceObj);
                if(invoiceFormisOpen === true) console.log('reset')
                }}
                type="submit"
                variant="save"
              >
                Save & Send
              </Button>
            </div>
          </div>
          <Message type="error" msg={formError} />
        </form>
      </div>
      <div
        className={`${styles.overlay}  ${
          invoiceFormisOpen && styles.overlayOpen
        }`}
      ></div>
    </>
  );
}

export default Form;
