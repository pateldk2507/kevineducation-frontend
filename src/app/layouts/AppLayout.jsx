import { useState } from 'react';
import Sidebar from '../components/sidebar';
import TopNavbar from '../components/TopNavbar';

export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-grow-1">
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-3">{children}</main>
      </div>

      {/* Overlay (Mobile only) */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
