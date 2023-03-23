import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './LoginModal.css';
import { useOnEscapeKey } from '../../hooks/useCloseOnEscapeKey';
import { loginUser } from '../../State/authActions';
import { AppDispatch } from '../../../store/store';
import Button from '../../../common/components/Button/Button';

export interface LoginData {
  email: string;
  password: string;
}

type Props = {
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onLoginUser: (logindata: LoginData) => void;
};

const LoginModal: React.FC<Props> = ({ show, onClose, onSuccess, onLoginUser }) => {
  const [validForm, setValidForm] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  useEffect(() => {
    const isFormValid: boolean = Object.values(loginData).every((value) => value !== '');
    if (isFormValid) setValidForm(true);
  }, [loginData]);

  useOnEscapeKey(onClose);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (): void => {
    if (validForm) {
      onLoginUser(loginData);
      onClose();
      onSuccess();
    }
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='login-modal' onClick={(event) => event.stopPropagation()}>
        <div className='login-modal-form'>
          <h2 className='login-modal-title'>Login</h2>
          <div className='login-modal-row'>
            <label>Email:</label>
            <input
              name='email'
              type={'email'}
              value={loginData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='login-modal-row'>
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
