import React from 'react';

import './Navbar.css';
import NavbarItem from './NavbarItem/NavbarItem';

const navigationItems = [
  {
    name: 'Flowers',
    url: `/flowers`,
  },
  {
    name: 'Favorite',
    url: `/favorite`,
  },
  {
    name: 'Profile',
    url: `/profile`,
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
