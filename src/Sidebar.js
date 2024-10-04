import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (

    <div className="sidebar">
      <img id='logo' src="../svg/Logo.svg" alt="Логотип"/>
      <ul>
        <li className="menu-item">
          <img className="sidebar_icons" src="../svg/Home.svg" alt="Дом"/>
          <span>Dashboard</span>
        </li>
        <li className="menu-item">
          <img className="sidebar_icons" src="../svg/Transfer.svg" alt="Трансфер"/>
          <span>Transactions</span>
        </li>
        <li className="menu-item">
          <img className="sidebar_icons" src="../svg/User.svg" alt="Пользователь"/>
          <span>Accounts</span>
        </li>
        <li className="menu-item">
          <img className="sidebar_icons" src="../svg/Economic.svg" alt="Экономика"/>
          <span>Investments</span>
        </li>
        <li className="menu-item">
          <img className="sidebar_icons" src="../svg/Card.svg" alt="Иконка дома"/>
          <span>Credit Cards</span>
        </li>
        <li className="menu-item">
          <img className="sidebar_icons" src="../svg/Loan.svg" alt="Поддержка"/>
          <span>Loans</span>
        </li>
        <li className="menu-item">
          <img className="sidebar_icons" src="../svg/Service.svg" alt="Сервис"/>
          <span>Services</span>
        </li>
        <li className="menu-item">
          <img className="sidebar_icons" src="../svg/Econometrics.svg" alt="Идея"/>
          <span>My Privileges</span>
        </li>
        <li className="menu-item">
          <img className="sidebar_icons" src="../svg/Settings_icon.svg" alt="Настройки"/>
          <span id='span-active'>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;