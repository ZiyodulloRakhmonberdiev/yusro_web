// src/components/sidebar/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import images from './../../../images/index';
import './sidebar.css';
import { useSidebar } from '../../../context/SidebarContext';

function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className={`sidebar-admin ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <div className="items">
        <ul>
          <div className="item-group">
            <p>Kompaniya ma'lumotlari</p>
            <li>
              <NavLink to='/admin/comforts' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Qulayliklar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/admin/members' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Agentlik Ma'lumotlari</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/admin/members' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>A'zolar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/sales' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Hamkorlik</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/cost' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Savollar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/report' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Fikrlar</span>
              </NavLink>
            </li>
          </div>
          <div className="item-group">
            <p>Aloqa</p>
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Munozara</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/income' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Lidlar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/warehouse' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Xabarnoma</span>
              </NavLink>
            </li>
          </div>
          <div className="item-group">
            <p>Post</p>
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Maqola teglari</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/income' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Maqolalar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/warehouse' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Kategoriyalar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/sales' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Izohlar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/cost' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Teglar</span>
              </NavLink>
            </li>
          </div>
          <div className="item-group">
            <p>Sayohat</p>
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Paket ma'lumotlari</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/income' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Joylar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/warehouse' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Tur paketlar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/sales' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Tur turi</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/cost' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Savollar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/report' className={({ isActive }) => isActive ? "active" : ""}>
                <div className="circle"></div><span>Fikrlar</span>
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
