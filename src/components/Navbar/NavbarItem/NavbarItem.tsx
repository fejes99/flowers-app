import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarItem.css';

type Props = {
  item: { name: string; url: string };
};

const NavbarItem: React.FC<Props> = ({ item: { name, url } }) => {
  return (
    <div className='navbar-item'>
      <NavLink
        to={url}
        // isActive={isActive}
        //  activeClassName='active'
      >
        {name}
      </NavLink>
    </div>
  );
};

export default NavbarItem;
