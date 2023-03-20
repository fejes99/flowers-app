import React, { useState } from 'react';
import { connect } from 'react-redux';
import './LoginModal.css';
import { useOnEscapeKey } from '../../hooks/useCloseOnEscapeKey';
import { loginUser } from '../../State/authActions';

export interface LoginData {
  email: string;
  password: string;
}

type Props = {
  show: boolean;
  onClose: () => void;
  onLoginUser: (logindata: LoginData) => void;
};

const LoginModal: React.FC<Props> = ({ show, onClose, onLoginUser }) => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  useOnEscapeKey(onClose);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onLoginUser(loginData);
    onClose();
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='login-modal' onClick={(event) => event.stopPropagation()}>
        <form className='login-modal-form' onSubmit={handleSubmit}>
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
          <button className='login-modal-submit-button' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoginUser: (loginData: LoginData) => dispatch(loginUser(loginData)),
  };
};

export default connect(null, mapDispatchToProps)(LoginModal);
