import React, { createContext, useContext, useReducer } from 'react';

const InvoiceContext = createContext();
const initialState = {
  invoices: [
    {
      id: 'XM9141',
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'Pending',
      amount: '4,032.33',
    },
  ],
  sender: {
    senderAddress: '',
    senderCity: '',
    senderPostCode: '',
    senderCountry: '',
  },
  client: {
    clientName: '',
    clientEmail: '',
    clientAddress: '',
    clientCity: '',
    clientPostCode: '',
    clientCountry: '',
  },
  paymentDay: 1,

  date: new Date(),
  invoiceFormisOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PAYMENT_DAY/CHANGED':
      return {
        ...state,
        sender: {
          ...state.sender,
          paymentDay: action.payload,
        },
      };

    case 'SENDER_ADDRESS/CHANGED':
      return { ...state, senderAddress: action.payload };
    case 'SENDER_CITY/CHANGED':
      return { ...state, senderCity: action.payload };
    case 'SENDER_POSTCODE/CHANGED':
      return { ...state, senderPostCode: action.payload };
    case 'SENDER_COUNTRY/CHANGED':
      return { ...state, senderCountry: action.payload };
    case 'CLIENT_NAME/CHANGED':
      return { ...state, clientName: action.payload };
    case 'CLIENT_EMAIL/CHANGED':
      return { ...state, clientEmail: action.payload };
    case 'CLIENT_ADDRESS/CHANGED':
      return { ...state, clientAddress: action.payload };
    case 'CLIENT_CITY/CHANGED':
      return { ...state, clientCity: action.payload };
    case 'CLIENT_POSTCODE/CHANGED':
      return { ...state, clientPostCode: action.payload };
    case 'CLIENT_COUNTRY/CHANGED':
      return { ...state, clientCountry: action.payload };
    case 'DATE/CHANGED':
      return { ...state, date: action.payload };
    case 'NEW_INVOICE/OPEN':
      return { ...state, invoiceFormisOpen: true };

    default:
      throw new Error('Unknown action type');
  }
};
const InvoiceProvider = ({ children }) => {
  const [{ invoices, date, client, sender, invoiceFormisOpen }, dispatch] =
    useReducer(reducer, initialState);

  // function to handle input change
  const handleInputChange = (value, type) => {
    dispatch({ type: type, payload: value });
  };

  // function to open form to create a new invoice
  const handleOpenForm = () => {
    dispatch({ type: 'NEW_INVOICE/OPEN' });
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        handleInputChange,
        date,
        sender,
        client,
        invoiceFormisOpen,
        handleOpenForm,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

const useInvoice = () => {
  const context = useContext(InvoiceContext);
  if (context === undefined)
    throw new Error('Cannot use Invoice Context outside Invoice Provider');
  return context;
};

export { InvoiceProvider, useInvoice };
