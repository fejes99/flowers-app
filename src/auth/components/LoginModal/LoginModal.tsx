import React, { useState } from 'react';
import { useOnEscapeKey } from '../../hooks/useCloseOnEscapeKey';
import './LoginModal.css';

interface LoginData {
  email: string;
  password: string;
}

type Props = {
  show: boolean;
  onClose: () => void;
};

const LoginModal: React.FC<Props> = ({ show, onClose }) => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  useOnEscapeKey(onClose);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(loginData);
    // TODO: Add logic to login the user with the loginData object
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='login-modal' onClick={(event) => event.stopPropagation()}>
        <form className='login-modal-form' onSubmit={handleSubmit}>
          <h2 className='login-modal-title'>Login</h2>
          <div className='login-modal-row'>
            <label>Email:</label>
            <input value={loginData.email} onChange={handleInputChange} />
          </div>
          <div className='login-modal-row'>
            <label>Password:</label>
            <input value={loginData.password} onChange={handleInputChange} />
          </div>
          <button className='login-modal-submit-button' type='submit'>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
