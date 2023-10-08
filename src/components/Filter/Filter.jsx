import React, { useState } from 'react';

import styles from './Filter.module.css';
import arrowDown from '../../assets/arrow-down.svg';
import arrowUp from '../../assets/arrow-up.svg';
import CheckBox from '../CheckBox/CheckBox';

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
  const [status, setStatus] = useState('');
  const [curChecked, setCurChecked] = useState(null);

  // handle radio check
  const handleRadioChange = (e) => {
    setStatus(e.target.value);
  };

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
        Filter by status
        <img src={isOpen ? arrowUp : arrowDown} alt="arrow-icon" />
      </div>

      <div className={`${styles.filterOpt} ${isOpen && styles.open}`}>
        {filterOptions.map((option, index) => (
          <CheckBox
            key={index}
            id={option.statusText}
            type={option.type}
            onRadioChange={handleRadioChange}
            index={index}
            curChecked={curChecked}
            setCurChecked={setCurChecked}
            setStatus={setStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default Filter;
