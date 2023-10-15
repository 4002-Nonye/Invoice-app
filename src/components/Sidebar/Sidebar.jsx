import React from 'react';
import styles from './Sidebar.module.css';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import moon from '../../assets/moon.svg';
import { useTheme } from '../../contexts/ThemeContext';
import sun from '../../assets/sun.svg';

function Sidebar() {
  const { switchTheme, theme } = useTheme();
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.btmImages}>
        <img
          src={`${theme === 'light' ? moon : sun}`}
          alt="theme-icon"
          className={styles.themeIcon}
          onClick={switchTheme}
        />
        <img src={avatar} alt="avatar" className={styles.avatar} />
      </div>
    </div>
  );
}

export default Sidebar;
