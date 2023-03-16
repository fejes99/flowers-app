import React from 'react';
import { useOnEscapeKey } from '../hooks/useCloseOnEscapeKey';
import { RegisterData } from '../RegisterModal/RegisterModal';
import './ProfileModal.css';

type Props = {
  // registerData: RegisterData,
  show: boolean;
  onClose: () => void;
};

const ProfileModal: React.FC<Props> = ({ show, onClose }) => {
  useOnEscapeKey(onClose);

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='profile-modal'>
        <h2 className='profile-modal-title'>Profile</h2>
        <div className='profile-modal-row'>
          <label>First Name:</label>
          <span>petar</span>
        </div>
        <div className='profile-modal-row'>
          <label>Last Name:</label>
          <span>petrovic</span>
        </div>
        <div className='profile-modal-row'>
          <label>Email:</label>
          <span>pera@gmail.com</span>
        </div>
        <div className='profile-modal-row'>
          <label>Date of Birth:</label>
          <span>test</span>
        </div>
        <button className='profile-modal-logout-button' type='submit'>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
