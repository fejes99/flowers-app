import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './RegisterModal.css';
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

type Props = {
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onRegisterUser: (registerData: RegisterData) => void;
};

const RegisterModal: React.FC<Props> = ({ show, onClose, onSuccess, onRegisterUser }) => {
  const [validForm, setValidForm] = useState(false);
  const [registerData, setRegisterData] = useState<RegisterData>({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
  });

  useEffect(() => {
    const isFormValid: boolean = Object.values(registerData).every((value) => value !== '');
    if (isFormValid) setValidForm(true);
  }, [registerData]);

  useOnEscapeKey(onClose);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleDateChange = (date: string): void => {
    setRegisterData({ ...registerData, date_of_birth: date });
  };

  const handleSubmit = (): void => {
    if (validForm) {
      onRegisterUser(registerData);
      onClose();
      onSuccess();
    }
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='register-modal' onClick={(event) => event.stopPropagation()}>
        <div className='register-modal-form'>
          <h2 className='register-modal-title'>Create an Account</h2>
          <div className='register-modal-row'>
            <label>First Name:</label>
            <input name='first_name' value={registerData.first_name} onChange={handleInputChange} />
          </div>
          <div className='register-modal-row'>
            <label>Last Name:</label>
            <input name='last_name' value={registerData.last_name} onChange={handleInputChange} />
          </div>
          <div className='register-modal-row'>
            <label>Email:</label>
            <input
              name='email'
              type={'email'}
              value={registerData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='register-modal-row'>
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
          <div className='register-modal-row'>
            <label>Date of Birth:</label>
            <DatePicker onDateChange={handleDateChange} />
          </div>
          <Button disabled={!validForm} onClick={handleSubmit}>
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
