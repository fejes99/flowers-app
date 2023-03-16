import React, { useState } from 'react';
import { formatDate } from '../../../common/helpers/formatDate';
import { useOnEscapeKey } from '../../hooks/useCloseOnEscapeKey';
import DatePicker from './DatePicker/DatePicker';

import './RegisterModal.css';

export interface RegisterData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: any;
}

type Props = {
  show: boolean;
  onClose: () => void;
};

const RegisterModal: React.FC<Props> = ({ show, onClose }) => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
  });

  useOnEscapeKey(onClose);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleDateChange = (date: Date) => {
    const formattedDate = formatDate(date);
    setRegisterData({ ...registerData, date_of_birth: formattedDate });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registerData);
    // TODO: Add logic to register the user with the registerData object
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='register-modal' onClick={(event) => event.stopPropagation()}>
        <form className='register-modal-form' onSubmit={handleSubmit}>
          <h2 className='register-modal-title'>Create an Account</h2>
          <div className='register-modal-row'>
            <label>Email:</label>
            <input value={registerData.email} onChange={handleInputChange} />
          </div>
          <div className='register-modal-row'>
            <label>Password:</label>
            <input value={registerData.password} onChange={handleInputChange} />
          </div>
          <div className='register-modal-row'>
            <label>First Name:</label>
            <input value={registerData.first_name} onChange={handleInputChange} />
          </div>
          <div className='register-modal-row'>
            <label>Last Name:</label>
            <input value={registerData.last_name} onChange={handleInputChange} />
          </div>
          <div className='register-modal-row'>
            <label>Date of Birth:</label>
            <DatePicker onDateChange={handleDateChange} />
          </div>
          <button className='register-modal-submit-button' type='submit'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
