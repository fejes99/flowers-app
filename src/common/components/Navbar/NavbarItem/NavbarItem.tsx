import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavbarItem.css';

export interface NavbarItemProps {
  name: string;
  url?: string;
  onClick?: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, url, onClick }) => (
  <div className='navbar-item' onClick={onClick}>
    {url ? <NavLink to={url}>{name}</NavLink> : <span>{name}</span>}
  </div>
);

export default NavbarItem;
