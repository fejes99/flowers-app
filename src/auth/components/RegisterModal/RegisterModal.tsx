import React, { useState } from 'react';
import { connect } from 'react-redux';
import './RegisterModal.css';
import { useOnEscapeKey } from '../../hooks/useCloseOnEscapeKey';
import DatePicker from './DatePicker/DatePicker';
import { registerUser } from '../../State/authActions';
import useModal from '../../hooks/useModal';

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
  onRegisterUser: (registerData: RegisterData) => void;
};

const RegisterModal: React.FC<Props> = ({ show, onClose, onRegisterUser }) => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
  });

  const { openRegisterSuccessModal } = useModal();

  useOnEscapeKey(onClose);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleDateChange = (date: string): void => {
    setRegisterData({ ...registerData, date_of_birth: date });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onRegisterUser(registerData);
    onClose();
    openRegisterSuccessModal();
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='register-modal' onClick={(event) => event.stopPropagation()}>
        <form className='register-modal-form' onSubmit={handleSubmit}>
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
            />
          </div>
          <div className='register-modal-row'>
            <label>Date of Birth:</label>
            <DatePicker onDateChange={handleDateChange} />
          </div>
          <button className='register-modal-submit-button' type='submit'>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onRegisterUser: (registerData: RegisterData) => dispatch(registerUser(registerData)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterModal);
