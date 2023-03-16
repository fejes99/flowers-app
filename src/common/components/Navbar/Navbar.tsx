import React, { useEffect } from 'react';
import ProfileModal from '../../../auth/components/ProfileModal/ProfileModal';
import LoginModal from '../../../auth/components/LoginModal/LoginModal';
import RegisterModal from '../../../auth/components/RegisterModal/RegisterModal';
import useModal from '../../../auth/hooks/useModal';
import './Navbar.css';
import NavbarItem, { NavbarItemProps } from './NavbarItem/NavbarItem';

const Navbar: React.FC = () => {
  const {
    showProfileModal,
    showLoginModal,
    showRegisterModal,
    openProfileModal,
    openLoginModal,
    openRegisterModal,
    closeAllModals,
  } = useModal();

  const isLoggedIn = false;

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

  if (isLoggedIn) {
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
        <LoginModal show={showLoginModal} onClose={closeAllModals} />
        <RegisterModal show={showRegisterModal} onClose={closeAllModals} />
      </div>
    </div>
  );
};

export default Navbar;
