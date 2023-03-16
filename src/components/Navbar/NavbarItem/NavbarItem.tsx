import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarItem.css';

type Props = {
  item: { name: string; link: string };
};

const NavbarItem: React.FC<Props> = ({ item: { name, link } }) => {
  const isActive = () => {};

  return (
    <div className='navbar-item'>
      <NavLink
        to={link}
        // isActive={isActive}
        //  activeClassName='active'
      >
        {name}
      </NavLink>
    </div>
  );
};

export default NavbarItem;
