import './AdminLayout.css';
import { Outlet } from 'react-router-dom'
import SideBar from './../components/admin/sidebar/Sidebar';
import { useState } from 'react';

function AdminLayout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = (e) => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsSidebarOpen(e.target)
  };

  return (
    <div className='admin-layout'>
      <SideBar isOpen={isSidebarOpen} />
      <main>
        <Outlet handleToggleSidebar={handleToggleSidebar} setIsSidebarOpen={setIsSidebarOpen} />
      </main>
      <footer></footer>
    </div>
  )
}

export default AdminLayout