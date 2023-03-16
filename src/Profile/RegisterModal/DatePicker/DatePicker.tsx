import React, { useState } from 'react';
import './DatePicker.css';

type Props = {
  onDateChange: (date: Date) => void;
};

const DatePicker: React.FC<Props> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    const date = new Date(dateValue);
    setSelectedDate(date);
    onDateChange(date);
  };

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${year}-${month}-${day}`;
  };

  return (
    <div className='date-picker'>
      <input type='date' value={formatDate(selectedDate)} onChange={handleDateChange} />
    </div>
  );
};

export default DatePicker;
