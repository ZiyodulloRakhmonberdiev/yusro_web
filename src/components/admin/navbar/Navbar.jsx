// src/components/navbar/Navbar.js
import React from 'react';
import { CiUser } from 'react-icons/ci';
import './navbar.css';
import { useSidebar } from '../../../context/SidebarContext';

function Navbar({ title, name, adminType }) {
  const { toggleSidebar } = useSidebar();

  return (
    <div className='navbar'>
      <div className="bars" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="title">{title}</div>
      <div className="navbar-in-user">
        <div className="user-image">
          <CiUser />
        </div>
        <div className="user-info">
          <p>{name}</p>
          <span>{adminType}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
