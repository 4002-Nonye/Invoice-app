/* eslint-disable react/prop-types */
import React from 'react';

function InvoiceCard({ invoice }) {
  return (
    <>
      <li>
        <span>#</span>XM9141
      </li>
      <li>Due {invoice.dueDate} </li>
      <li>{invoice.name}</li>
      <li>£ {invoice.amount}</li>
      <li>{invoice.status}</li>
    </>
  );
}

export default InvoiceCard;
