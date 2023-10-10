import React, { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
const InvoiceContext = createContext();
const initialState = {
  invoices: [
    {
      id: 'XM9141',
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'pending',
      amount: '4,032.33',
    },
    {
      id: 'XM9140',
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'pending',
      amount: '4,032.33',
    },
    {
      id: 'XM9541',
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'paid',
      amount: '4,032.33',
    },
    {
      id: 'XB9141',
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'draft',
      amount: '4,032.33',
    },
    {
      id: 'XF9041',
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'pending',
      amount: '4,032.33',
    },
    {
      id: 'GM9141',
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'paid',
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
  description: '',

  itemList: [{ id: uuidv4(), name: '', qty: '', price: '', total: 0 }],
  invoiceFormisOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'PAYMENT_DAY/CHANGED':
      return {
        ...state,
        paymentDay: action.payload,
      };

    case 'SENDER_ADDRESS/CHANGED':
      return {
        ...state,
        sender: {
          ...state.sender,
          senderAddress: action.payload,
        },
      };
    case 'SENDER_CITY/CHANGED':
      return {
        ...state,
        sender: {
          ...state.sender,
          senderCity: action.payload,
        },
      };
    case 'SENDER_POSTCODE/CHANGED':
      return {
        ...state,
        sender: {
          ...state.sender,
          senderPostCode: action.payload,
        },
      };
    case 'SENDER_COUNTRY/CHANGED':
      return {
        ...state,
        sender: {
          ...state.sender,
          senderCountry: action.payload,
        },
      };
    case 'CLIENT_NAME/CHANGED':
      return {
        ...state,
        client: {
          ...state.client,
          clientName: action.payload,
        },
      };
    case 'CLIENT_EMAIL/CHANGED':
      return {
        ...state,
        client: {
          ...state.client,
          clientEmail: action.payload,
        },
      };
    case 'CLIENT_ADDRESS/CHANGED':
      return {
        ...state,
        client: {
          ...state.client,
          clientAddress: action.payload,
        },
      };
    case 'CLIENT_CITY/CHANGED':
      return {
        ...state,
        client: {
          ...state.client,
          clientCity: action.payload,
        },
      };
    case 'CLIENT_POSTCODE/CHANGED':
      return {
        ...state,
        client: {
          ...state.client,
          clientPostCode: action.payload,
        },
      };
    case 'CLIENT_COUNTRY/CHANGED':
      return {
        ...state,
        client: {
          ...state.client,
          clientCountry: action.payload,
        },
      };
    case 'DATE/CHANGED':
      return { ...state, date: action.payload };

    case 'DESCRIPTION/CHANGED':
      return { ...state, description: action.payload };

    case 'INCREASE/ITEMLIST':
      return {
        ...state,
        itemList: [...state.itemList, action.payload],
      };
    case 'ITEM_VALUE/CHANGED':
      return {
        ...state,

        // check input field currently being updated and change it
        itemList: state.itemList.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              [action.payload.field]: action.payload.text,

              total:
                Number(
                  action.payload.field === 'qty'
                    ? action.payload.text
                    : item.qty
                ) *
                Number(
                  action.payload.field === 'price'
                    ? action.payload.text
                    : item.price
                ),
            };
          }
          return item; // Keep other items unchanged
        }),
      };

    case 'DELETE/ITEM_LIST':
      return {
        ...state,
        itemList: state.itemList.filter((item) => item.id !== action.payload),
      };
    case 'NEW_INVOICE/OPEN':
      return { ...state, invoiceFormisOpen: true };

    default:
      throw new Error('Unknown action type');
  }
};
const InvoiceProvider = ({ children }) => {
  const [
    {
      invoices,
      date,
      paymentDay,
      client,
      sender,
      description,
      itemList,
      invoiceFormisOpen,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // function to handle input change
  const handleInputChange = (value, type) => {
    dispatch({ type: type, payload: value });
  };

  // function to open form to create a new invoice
  const handleOpenForm = () => {
    dispatch({ type: 'NEW_INVOICE/OPEN' });
  };

  // function to handle payment terms
  const handlePaymentTerms = (term) => {
    dispatch({ type: 'PAYMENT_DAY/CHANGED', payload: term });
  };

  //function to increase itemList array
  const handleAddItem = (item) => {
    dispatch({ type: 'INCREASE/ITEMLIST', payload: item });
  };

  // function to contol input values of itemList array
  const handleItemValueChange = (e, id, field) => {
    dispatch({
      type: 'ITEM_VALUE/CHANGED',
      payload: { id, field, text: e.target.value },
    });
  };

  const handleDeleteItem = (id) => {
    dispatch({ type: 'DELETE/ITEM_LIST', payload: id });
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        handleInputChange,
        paymentDay,
        date,
        sender,
        client,
        description,
        invoiceFormisOpen,
        handleOpenForm,
        handlePaymentTerms,
        itemList,
        handleAddItem,
        handleItemValueChange,
        handleDeleteItem,
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
