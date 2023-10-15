import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Invoice from '../../components/Invoice/Invoice';
import styles from './Home.module.css';
import CreateInvoice from '../../components/CreateInvoice/CreateInvoice';
import { useTheme } from '../../contexts/ThemeContext';

function Home() {
  const { theme } = useTheme();
  return (
    <div className={`${styles.home} ${theme === 'dark' && styles.dark}`}>
      <Sidebar />
      <CreateInvoice />
      <Invoice />
    </div>
  );
}

export default Home;
