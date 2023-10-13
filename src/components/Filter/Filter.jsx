import React, { useState } from 'react';

import styles from './Filter.module.css';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import CheckBox from '../CheckBox/CheckBox';
import useId from '../../hooks/useId';

// options for filter box
const filterOptions = [
  {
    statusText: 'draft',
    type: 'radio',
  },
  {
    statusText: 'pending',
    type: 'radio',
  },
  {
    statusText: 'paid',
    type: 'radio',
  },
];

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  // function to display/hide filter box
  const handleShowFilter = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className={styles.filterBox}>
      <div
        className={styles.filter}
        onClick={handleShowFilter}
        aria-hidden="true"
      >
        <span>
          {' '}
          Filter <span className={styles.mobileFilter}>by status</span>
        </span>
        <img src={isOpen ? arrowUp : arrowDown} alt="arrow-icon" />
      </div>

      <div className={`${styles.filterOpt} ${isOpen && styles.open}`}>
        {filterOptions.map((option, index) => (
          <CheckBox key={index} id={option.statusText} type={option.type} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
