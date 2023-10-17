import { useState, useEffect } from 'react';

function useDateFormatter(date, daysToAdd) {
  const [dueDate, setDueDate] = useState('');
  
  useEffect(() => {
    const initialDate = new Date(date);
    const resultDate = new Date(initialDate);
    resultDate.setDate(initialDate.getDate() + daysToAdd);

    const formattedDate = resultDate
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
      .replace(',', '');

    setDueDate(formattedDate);
  }, [date, daysToAdd]);

  return dueDate;
}

export default useDateFormatter;
