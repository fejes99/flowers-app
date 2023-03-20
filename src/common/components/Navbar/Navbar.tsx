import React from 'react';
import { connect } from 'react-redux';
import './Navbar.css';
import NavbarItem, { NavbarItemProps } from './NavbarItem/NavbarItem';
import useModal from '../../../auth/hooks/useModal';
import ProfileModal from '../../../auth/components/ProfileModal/ProfileModal';
import LoginModal from '../../../auth/components/LoginModal/LoginModal';
import RegisterModal from '../../../auth/components/RegisterModal/RegisterModal';
import LoginSuccessModal from '../../../auth/components/LoginModal/SuccessModal/LoginSuccessModal';
import RegisterSuccessModal from '../../../auth/components/RegisterModal/SuccessModal/RegisterSuccessModal';

interface Props {
  isAuthenticated: boolean;
}

const Navbar: React.FC<Props> = ({ isAuthenticated }) => {
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

  if (isAuthenticated) {
    navbarItems.push({
      name: 'Profile',
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
        <LoginSuccessModal show={showLoginSuccessModal} onClose={closeAllModals} />
        <RegisterModal show={showRegisterModal} onClose={closeAllModals} />
        <RegisterSuccessModal show={showRegisterSuccessModal} onClose={closeAllModals} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.auth.user !== null,
  };
};

export default connect(mapStateToProps)(Navbar);
