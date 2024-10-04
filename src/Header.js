import React from 'react';
import './Header.css';
import logo from './svg/Search.svg';

const Header = () => {
  return (
    <div className="header">
      <h1 id='header-subtitle'>Setting</h1>
      <img src={Search} alt="Поиск" />;
      <div className="profile-section">
        <div className="icons">
          <img src="../svg/Settings.svg" alt="Настройки" className="profile-pic" />
          <img src="../svg/Alarm.svg" alt="Уведомление" className="profile-pic" />
        </div>
        <img src="../svg/Photo_mini.svg" alt="Профиль" className="profile-pic" />
      </div>
    </div>
  );
};

export default Header;
