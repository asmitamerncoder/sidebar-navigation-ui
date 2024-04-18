import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark, faBars, faBell, faHouse, faBullseye, faDumbbell, faAppleWhole, faUser, faGears, faCircleInfo, faRightFromBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function DashboardLayout({ children }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='wrapper'>
      {isOpen && (<div className='overlay' onClick={() => setIsOpen(false)}></div>)}
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className='close-toggle-wrapper' onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faRectangleXmark} className='close-toggle' />
        </div>
        <div className='logo-wrapper'>
          <p className='logo'>GlobalFit</p>
        </div>
        <div className='sidebar-menu-list-wrapper'>
          <div className='single-menu-item-wrapper'>
            <FontAwesomeIcon icon={faHouse} className='fa-icon' />
            <p className='menu-text'>Main</p>
          </div>
        </div>
        <div className='sidebar-menu-list-wrapper'>
          <div className='single-menu-item-wrapper'>
            < FontAwesomeIcon icon={faBullseye} className='fa-icon' />
            <p className='menu-text'>Goals</p>
          </div>
        </div>
        <div className='sidebar-menu-list-wrapper'>
          <div className='single-menu-item-wrapper'>
            <FontAwesomeIcon icon={faDumbbell} className='fa-icon' />
            <p className='menu-text'>Workouts</p>
          </div>
        </div>
        <div className='sidebar-menu-list-wrapper'>
          <div className='single-menu-item-wrapper'>
            <FontAwesomeIcon icon={faAppleWhole} className='fa-icon' />
            <p className='menu-text'>Dite</p>
          </div>
        </div>
        <div className='sidebar-menu-list-wrapper'>
          <div className='single-menu-item-wrapper'>
            <FontAwesomeIcon icon={faUser} className='fa-icon' />
            <p className='menu-text'>Friends</p>
          </div>
        </div>
        <div className='sidebar-menu-list-wrapper'>
          <div className='single-menu-item-wrapper'>
            <FontAwesomeIcon icon={faGears} className='fa-icon' />
            <p className='menu-text'>Settings</p>
          </div>
        </div>
        <div><hr className='devide-sidebar'></hr></div>
        <div className='sidebar-menu-list-wrapper'>
          <div className='single-menu-item-wrapper'>
            <FontAwesomeIcon icon={faCircleInfo} className='fa-icon' />
            <p className='menu-text'>Help</p>
          </div>
        </div>
        <div className='sidebar-menu-list-wrapper'>
          <div className='single-menu-item-wrapper'>
            <FontAwesomeIcon icon={faRightFromBracket} className='fa-icon' />
            <p className='menu-text'>Logout</p>
          </div>
        </div>
      </div>
      <div className='main-content'>
        <div className='navbar'>
          <div className='navbar-logo-wrapper'>
            <p className='navbar-logo'>GlobalFit</p>
          </div>
          <div className='searchBar-wrapper'>
            <input type="text" placeholder="Search..." />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </div>
          <div className='bell-profile-wrapper'>
            <div className='bell-notification-wrapper'>
              <FontAwesomeIcon icon={faBell} className='bell-notification' />
            </div>
            <div className='profile-wrapper'>
              <div className='profile-text-icon-wrapper'>
                <div className="avatar">
                  <FaUserCircle className="avatar-icon" />
                </div>
                <div className='profile-text-conatiner'>
                  <p className='nameText'>Asmita Rai</p>
                  <p className="emailText">asmitarai4718@gmail.com</p>
                </div>
                <div className='dotIcon-wrapper' onClick={toggleNavbar}>
                  <FontAwesomeIcon icon={faBars} className='dotIcon' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className='body-content'>{children}</main>
      </div>

    </div>
  )
}

export default DashboardLayout