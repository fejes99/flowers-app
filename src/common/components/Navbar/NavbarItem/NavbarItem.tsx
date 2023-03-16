import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarItem.css';

export interface NavbarItemProps {
  name: string;
  url?: string;
  onClick?: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, url, onClick }) => {
  let item = (
    <div className='navbar-item' onClick={onClick}>
      <span>{name}</span>
    </div>
  );
  if (url)
    item = (
      <div className='navbar-item' onClick={onClick}>
        <NavLink to={url}>{name}</NavLink>
      </div>
    );

  return item;
};

export default NavbarItem;
