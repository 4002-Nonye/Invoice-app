import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../config/supabaseClient';
const InvoiceContext = createContext();
const initialState = {
  status: '',
  invoices: [],
  invoiceDetail: [],
  invoiceID: '',
  isLoading: false,
  invoiceFormisOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEW_INVOICE/OPEN':
      return { ...state, invoiceFormisOpen: true };
    case 'STATUS/CHANGED':
      return { ...state, status: action.payload };
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'DATA/FAILED':
      return { ...state, isLoading: false, error: action.payload };
    case 'DATA/LOADED':
      return { ...state, isLoading: false, invoices: action.payload };

    case 'INVOICE_ID/CHANGED':
      return { ...state, invoiceID: action.payload };
    case 'INVOICE_DETAIL/LOADED':
      return { ...state, isLoading: false, invoiceDetail: action.payload };
    default:
      throw new Error('Unknown action type');
  }
};
const InvoiceProvider = ({ children }) => {
  const [
    {
      status,
      invoices,
      invoiceDetail,
      invoiceFormisOpen,
      isLoading,
      invoiceID,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // function to open form to create a new invoice
  const handleOpenForm = () => {
    dispatch({ type: 'NEW_INVOICE/OPEN' });
  };

  /////////////////////////////////////////////////////////////////////////////////////

  // get invoices on initial render
  useEffect(() => {
    dispatch({ type: 'LOADING' });
    const getInvoices = async () => {
      try {
        const { data, error } = await supabase.from('invoices').select();

        if (data) dispatch({ type: 'DATA/LOADED', payload: data });
        if (error) throw new Error(error.message);
      } catch (error) {
        dispatch({ type: 'DATA/FAILED', payload: error.message });
      }
    };
    getInvoices();
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  //get invoice by ID
  useEffect(() => {
    dispatch({ type: 'LOADING' });
    const getInvoiceByID = async () => {
      try {
        const { data, error } = await supabase
          .from('invoices')
          .select()
          .eq('id', invoiceID)
          .single();

        if (data) dispatch({ type: 'INVOICE_DETAIL/LOADED', payload: data });
        if (error) throw new Error(error.message); // Throw an error if there's an error
      } catch (error) {
        dispatch({ type: 'DATA/FAILED', payload: error.message });
      }
    };
    getInvoiceByID();
  }, [invoiceID]);

  ////////////////////////////////////////////////////////////////////////////////

  // create new invoice

  const handleSubmit = async (e, newInvoice) => {
    e.preventDefault();
    if (!newInvoice) {
      return;
    }

    //add new data
    const { data, error } = await supabase
      .from('invoices')
      .insert([newInvoice])
      .select();

      if(error)console.log(error)
      if(data)console.log(data)

    console.log(newInvoice);

    // const {data,error}
  };

  ///////////////////////////////////////////////////////////////////////////////////////////

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
        dispatch,
        invoiceDetail,
        isLoading,
        handleSubmit,
        handleOpenForm,
        invoiceFormisOpen,
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
