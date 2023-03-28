import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import isEmail from 'validator/lib/isEmail';

import { useOnEscapeKey } from '../../hooks/useCloseOnEscapeKey';
import { loginUser } from '../../State/authActions';
import { AppDispatch } from '../../../store/store';
import Button from '../../../common/components/Button/Button';

export interface LoginData {
  email: string;
  password: string;
}

interface Props {
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onLoginUser: (logindata: LoginData) => void;
}

const LoginModal: React.FC<Props> = ({ show, onClose, onSuccess, onLoginUser }) => {
  const [validForm, setValidForm] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const validateEmail = (email: string) => {
    const isValidEmail = isEmail(email);
    setValidEmail(isValidEmail);
  };

  useEffect(() => {
    const isFormValid: boolean = Object.values(loginData).every((value) => value !== '');
    if (isFormValid && validEmail) setValidForm(true);
    else setValidForm(false);
  }, [loginData, validEmail]);

  useOnEscapeKey(onClose);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });

    if (name === 'email') {
      validateEmail(value);
    }
  };

  const handleSubmit = (): void => {
    if (validForm && validEmail) {
      onLoginUser(loginData);
      onClose();
      onSuccess();
    }
  };

  return (
    <div className={`modal-container ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='modal' onClick={(event) => event.stopPropagation()}>
        <div className='modal-form'>
          <h2 className='modal-title'>Login</h2>
          <div className='modal-row'>
            <label>Email:</label>
            <input
              name='email'
              type={'email'}
              value={loginData.email}
              onChange={handleInputChange}
              className={validEmail ? 'valid' : 'invalid'}
            />
          </div>
          <div className='modal-row'>
            <label>Password:</label>
            <input
              name='password'
              type={'password'}
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>
          <Button disabled={!validForm} onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onLoginUser: (loginData: LoginData) => dispatch(loginUser(loginData)),
  };
};

export default connect(null, mapDispatchToProps)(LoginModal);
