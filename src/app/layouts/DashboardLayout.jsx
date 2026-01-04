import { useState } from 'react';
import Sidebar from '../components/sidebar';
import TopNavbar from '../components/TopNavbar';
import { Outlet } from 'react-router-dom';
import '../../styles/overlay.css';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Dashboard');

  return (
    <div className="d-flex">

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />


      {/* Overlay (mobile only) */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay d-lg-none"
          onClick={() => setSidebarOpen(false)}
        />
      )}


      {/* Main Content */}
      <div className="flex-grow-1">
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
