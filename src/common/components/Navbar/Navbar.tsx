import React from 'react';
import { connect } from 'react-redux';

import './Navbar.css';
import { StoreState } from '../../../store/store';
import User from '../../../auth/Auth';
import NavbarItem, { NavbarItemProps } from './NavbarItem/NavbarItem';
import useModal from '../../../auth/hooks/useModal';
import ProfileModal from '../../../auth/components/ProfileModal/ProfileModal';
import LoginModal from '../../../auth/components/LoginModal/LoginModal';
import RegisterModal from '../../../auth/components/RegisterModal/RegisterModal';
import LoginSuccessModal from '../../../auth/components/LoginModal/SuccessModal/LoginSuccessModal';
import RegisterSuccessModal from '../../../auth/components/RegisterModal/SuccessModal/RegisterSuccessModal';

interface Props {
  user: User | null;
}

const Navbar: React.FC<Props> = ({ user }) => {
  const {
    showProfileModal,
    showLoginModal,
    showLoginSuccessModal,
    showRegisterModal,
    showRegisterSuccessModal,
    openProfileModal,
    openLoginModal,
    openLoginSuccessModal,
    openRegisterModal,
    openRegisterSuccessModal,
    closeAllModals,
  } = useModal();

  const navbarItems: NavbarItemProps[] = [
    {
      name: 'Flowers',
      url: '/flowers',
      onClick: undefined,
    },
    {
      name: 'Favorite',
      url: '/favorite',
      onClick: undefined,
    },
  ];

  if (user !== null) {
    navbarItems.push({
      name: `${user.data?.first_name} ${user.data?.last_name}`,
      onClick: openProfileModal,
    });
  } else {
    navbarItems.push(
      {
        name: 'Login',
        onClick: openLoginModal,
      },
      {
        name: 'Register',
        onClick: openRegisterModal,
      }
    );
  }

  return (
    <div className='navbar'>
      <div className='navbar-nav'>
        {navbarItems.map((item: NavbarItemProps) => (
          <NavbarItem key={item.name} {...item} />
        ))}
        <ProfileModal show={showProfileModal} onClose={closeAllModals} />
        <LoginModal
          show={showLoginModal}
          onClose={closeAllModals}
          onSuccess={openLoginSuccessModal}
        />
        <LoginSuccessModal
          show={showLoginSuccessModal}
          onClose={closeAllModals}
          onProfile={openProfileModal}
        />
        <RegisterModal
          show={showRegisterModal}
          onClose={closeAllModals}
          onSuccess={openRegisterSuccessModal}
        />
        <RegisterSuccessModal
          show={showRegisterSuccessModal}
          onClose={closeAllModals}
          onSuccess={openLoginModal}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Navbar);
