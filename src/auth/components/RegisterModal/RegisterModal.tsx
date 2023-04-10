import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { useOnEscapeKey } from '../../hooks/useCloseOnEscapeKey';
import DatePicker from './DatePicker/DatePicker';
import { registerUser } from '../../State/authActions';
import { AppDispatch } from '../../../store/store';
import Button from '../../../common/components/Button/Button';

export interface RegisterData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

interface Props {
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onRegisterUser: (registerData: RegisterData) => void;
}

const RegisterModal: React.FC<Props> = ({ show, onClose, onSuccess, onRegisterUser }) => {
  const [validForm, setValidForm] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [registerData, setRegisterData] = useState<RegisterData>({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
  });

  const validateEmail = (email: string) => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    setValidEmail(isValidEmail);
  };

  useEffect(() => {
    const isFormValid: boolean = Object.values(registerData).every((value) => value !== '');
    if (isFormValid && validEmail) setValidForm(true);
    else setValidForm(false);
  }, [registerData, validEmail]);

  useOnEscapeKey(onClose);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const handleDateChange = (date: string): void => {
    setRegisterData({ ...registerData, date_of_birth: date });
  };

  const handleSubmit = (): void => {
    if (validForm && validEmail) {
      onRegisterUser(registerData);
      onClose();
      onSuccess();
    }
  };

  return (
    <div className={`modal-container ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='modal' onClick={(event) => event.stopPropagation()}>
        <div className='modal-form'>
          <h2 className='modal-title'>Create an Account</h2>
          <div className='modal-row'>
            <label>First Name:</label>
            <input name='first_name' value={registerData.first_name} onChange={handleInputChange} />
          </div>
          <div className='modal-row'>
            <label>Last Name:</label>
            <input name='last_name' value={registerData.last_name} onChange={handleInputChange} />
          </div>
          <div className='modal-row'>
            <label>Email:</label>
            <input
              name='email'
              type={'email'}
              value={registerData.email}
              onChange={handleInputChange}
              className={validEmail ? 'valid' : 'invalid'}
            />
          </div>
          <div className='modal-row'>
            <label>Password:</label>
            <input
              name='password'
              type={'password'}
              value={registerData.password}
              onChange={handleInputChange}
              pattern='.{6,}'
              title='Password must have a minimum length of 6 characters'
            />
          </div>
          <div className='modal-row'>
            <label>Date of Birth:</label>
            <DatePicker onDateChange={handleDateChange} />
          </div>
          <Button type='success' disabled={!validForm} onClick={handleSubmit}>
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onRegisterUser: (registerData: RegisterData) => dispatch(registerUser(registerData)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterModal);
