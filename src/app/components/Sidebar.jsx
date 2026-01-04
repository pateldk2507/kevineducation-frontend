import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/sidebar.css';
import logo from '../../assets/logo.png';

export default function Sidebar({ isOpen, onClose }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = menu => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header text-center">
        <img src={logo} height="50" alt='Kevin Education Logo' className='sidebar-logo mb-2'/>
        {/* <h5 className="m-0 text-center">Kevin Education</h5> */}
        <hr />
      </div>

      <ul className="sidebar-menu">

        {/* DASHBOARD */}
        <li>
          <NavLink
            to="/dashboard"
            className="submenu-link"
            onClick={onClose}
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </NavLink>
        </li>

        {/* STUDENT */}
        <li>
          <button className="sidebar-link" onClick={() => toggleMenu('student')}>
            <span>
              <i className="bi bi-mortarboard-fill me-2"></i>
              Student
            </span>
            <i className={`bi ${openMenu === 'student' ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
          </button>

          {openMenu === 'student' && (
            <ul className="submenu submenu-animate">
              <li>
                <NavLink to="/students/list" className="submenu-link" onClick={onClose}>
                  <i className="bi bi-list-ul me-2"></i>
                  Student List
                </NavLink>
              </li>
              <li>
                <NavLink to="/students/add" className="submenu-link" onClick={onClose}>
                  <i className="bi bi-person-plus me-2"></i>
                  Add Student
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* PARENT */}
        <li>
          <button className="sidebar-link" onClick={() => toggleMenu('parent')}>
            <span>
              <i className="bi bi-people-fill me-2"></i>
              Parent
            </span>
            <i className={`bi ${openMenu === 'parent' ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
          </button>

          {openMenu === 'parent' && (
            <ul className="submenu submenu-animate">
              <li>
                <NavLink to="/parents/list" className="submenu-link" onClick={onClose}>
                  <i className="bi bi-card-list me-2"></i>
                  Parent List
                </NavLink>
              </li>
              <li>
                <NavLink to="/parents/add" className="submenu-link" onClick={onClose}>
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Add Parent
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* FACULTY */}
        <li>
          <button className="sidebar-link" onClick={() => toggleMenu('faculty')}>
            <span>
              <i className="bi bi-person-badge-fill me-2"></i>
              Faculty
            </span>
            <i className={`bi ${openMenu === 'faculty' ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
          </button>

          {openMenu === 'faculty' && (
            <ul className="submenu submenu-animate">
              <li>
                <NavLink to="/faculty/list" className="submenu-link" onClick={onClose}>
                  <i className="bi bi-person-lines-fill me-2"></i>
                  Faculty List
                </NavLink>
              </li>
              <li>
                <NavLink to="/faculty/add" className="submenu-link" onClick={onClose}>
                  <i className="bi bi-person-plus me-2"></i>
                  Add Faculty
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        {/* FEES */}
        <li>
          <button className="sidebar-link" onClick={() => toggleMenu('fees')}>
            <span>
              <i className="bi bi-currency-dollar me-2"></i>
              Fees
            </span>
            <i className={`bi ${openMenu === 'fees' ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
          </button>
            {openMenu === 'fees' && (
              <ul className="submenu submenu-animate">
                <li>
                  <NavLink to="/fees/list" className="submenu-link" onClick={onClose}>
                    <i className="bi bi-list-ul me-2"></i>
                    Fees List
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fees/add" className="submenu-link" onClick={onClose}>
                    <i className="bi bi-person-plus me-2"></i>
                    Add Fees
                  </NavLink>
                </li>
              </ul>
            )}
        </li>
        {/* SUBJECTS */}
        <li>
          <button className="sidebar-link" onClick={() => toggleMenu('subjects')}>
            <span>
              <i className="bi bi-journal-bookmark-fill me-2"></i>
              Subjects
            </span>
            <i className={`bi ${openMenu === 'subjects' ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
          </button>
            {openMenu === 'subjects' && (
              <ul className="submenu submenu-animate">
                <li>
                  <NavLink to="/subject/list" className="submenu-link" onClick={onClose}>
                    <i className="bi bi-list-ul me-2"></i>
                    Subject List
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/subject/add" className="submenu-link" onClick={onClose}>
                    <i className="bi bi-person-plus me-2"></i>
                    Add Subject
                  </NavLink>
                </li>
              </ul>
            )}
        </li>
        {/* CLASS */}
        <li>
          <button className="sidebar-link" onClick={() => toggleMenu('class')}>
            <span>
              <i className="bi bi-building-fill me-2"></i>
              Class
            </span>
            <i className={`bi ${openMenu === 'class' ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
          </button>
            {openMenu === 'class' && (
                <ul className="submenu submenu-animate">
                    <li>
                        <NavLink to="/class/list" className="submenu-link" onClick={onClose}>
                            <i className="bi bi-list-ul me-2"></i>
                            Class List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/class/add" className="submenu-link" onClick={onClose}>
                            <i className="bi bi-person-plus me-2"></i>
                            Add Class
                        </NavLink>
                    </li>
                </ul>
            )}
        </li>
      </ul>
    </aside>
  );
}
