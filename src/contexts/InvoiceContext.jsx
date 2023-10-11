import React, { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
const InvoiceContext = createContext();
const initialState = {
  status: '',
  invoices: [
    {
      id: 'XM9140',
      senderAddress: `19 Union Terrace
      London 
      E1 3EZ
      United Kingdom`,
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'draft',
      amount: '4,032.33',
      description: 'Graphic Design',
      invoiceDate: '21 Aug 2021',
      paymentDue: '20 Sep 2021',
      client: 'Alex Grim',
      clientAddress: `84 Church Way
      Bradford 
      BD1 9PB
      United Kingdom`,
      clientEmail: 'alexgrim@mail.com',
      itemList: [{ id: uuidv4(), name: '', qty: '', price: '', total: 0 }],
    },
  
    {
      id: 'XM9140',
      senderAddress: `19 Union Terrace
      London 
      E1 3EZ
      United Kingdom`,
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'paid',
      amount: '4,032.33',
      description: 'Graphic Design',
      invoiceDate: '21 Aug 2021',
      paymentDue: '20 Sep 2021',
      client: 'Alex Grim',
      clientAddress: `84 Church Way
      Bradford 
      BD1 9PB
      United Kingdom`,
      clientEmail: 'alexgrim@mail.com',
      itemList: [{ id: uuidv4(), name: '', qty: '', price: '', total: 0 }],
    },
    {
      id: 'XM9140',
      senderAddress: `19 Union Terrace
      London 
      E1 3EZ
      United Kingdom`,
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'draft',
      amount: '4,032.33',
      description: 'Graphic Design',
      invoiceDate: '21 Aug 2021',
      paymentDue: '20 Sep 2021',
      client: 'Alex Grim',
      clientAddress: `84 Church Way
      Bradford 
      BD1 9PB
      United Kingdom`,
      clientEmail: 'alexgrim@mail.com',
      itemList: [{ id: uuidv4(), name: '', qty: '', price: '', total: 0 }],
    },  {
      id: 'XM9140',
      senderAddress: `19 Union Terrace
      London 
      E1 3EZ
      United Kingdom`,
      dueDate: '20 Sep 2021',
      name: 'Alysa Werner',
      status: 'pending',
      amount: '4,032.33',
      description: 'Graphic Design',
      invoiceDate: '21 Aug 2021',
      paymentDue: '20 Sep 2021',
      client: 'Alex Grim',
      clientAddress: `84 Church Way
      Bradford 
      BD1 9PB
      United Kingdom`,
      clientEmail: 'alexgrim@mail.com',
      itemList: [{ id: uuidv4(), name: '', qty: '', price: '', total: 0 }],
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'STATUS/CHANGED':
      return { ...state, status: action.payload };

    default:
      throw new Error('Unknown action type');
  }
};
const InvoiceProvider = ({ children }) => {
  const [{ status, invoices }, dispatch] = useReducer(reducer, initialState);

  // function to handle input change
  const handleInputChange = (value, type) => {
    dispatch({ type: type, payload: value });
  };

  return (
    <InvoiceContext.Provider
      value={{
        status,
        invoices,
        handleInputChange,
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
