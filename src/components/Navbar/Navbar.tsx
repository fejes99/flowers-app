import React from 'react';

import './Navbar.css';
import NavbarItem from './NavbarItem/NavbarItem';

const navigationItems = [
  {
    name: 'Flowers',
    link: `/flowers`,
  },
  {
    name: 'Favorite',
    link: `/favorite`,
  },
  {
    name: 'Profile',
    link: `/profile`,
  },
];

const Navbar = () => {
  let navbarItems = navigationItems.map((item) => {
    return <NavbarItem key={item.name} item={item} />;
  });
  return (
    <div className='navbar'>
      <div className='navbar-nav'>{navbarItems}</div>
    </div>
  );
};

export default Navbar;
