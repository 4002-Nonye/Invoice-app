import React from 'react';
import styles from './Sidebar.module.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import moon from '../../assets/moon.svg';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.btmImages}>
        <img src={moon} alt="theme-icon" className={styles.themeIcon} />
        <img src={avatar} alt="avatar" className={styles.avatar} />
      </div>
    </div>
  );
}

export default Sidebar;
