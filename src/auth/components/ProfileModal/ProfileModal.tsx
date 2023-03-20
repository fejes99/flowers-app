import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useOnEscapeKey } from '../../hooks/useCloseOnEscapeKey';
import { fetchUser, logoutUser } from '../../State/authActions';
import './ProfileModal.css';

export interface ProfileData {
  first_name: string;
  last_name: string;
}

interface Props {
  show: boolean;
  user: User;
  onClose: () => void;
  onFetchUser: (token: string) => void;
  onLogoutUser: () => void;
}

const ProfileModal: React.FC<Props> = ({ show, user, onClose, onFetchUser, onLogoutUser }) => {
  useEffect(() => {
    if (user?.token) onFetchUser(user?.token);
  }, [onFetchUser, user?.token]);

  useOnEscapeKey(onClose);

  const handleLogout = () => {
    onLogoutUser();
    onClose();
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='profile-modal' onClick={(event) => event.stopPropagation()}>
        <h2 className='profile-modal-title'>Profile</h2>
        <div className='profile-modal-row'>
          <label>First Name:</label>
          <span>{user?.data?.first_name}</span>
        </div>
        <div className='profile-modal-row'>
          <label>Last Name:</label>
          <span>{user?.data?.last_name}</span>
        </div>
        <button className='profile-modal-logout-button' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = () => (dispatch: any) => {
  return {
    onFetchUser: (token: string) => dispatch(fetchUser(token)),
    onLogoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);
