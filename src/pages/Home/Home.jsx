import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Invoice from '../../components/Invoice/Invoice';
import styles from './Home.module.css';
import CreateInvoice from '../../components/CreateInvoice/CreateInvoice';

function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <CreateInvoice />
      <Invoice />
    </div>
  );
}

export default Home;
