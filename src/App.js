// App.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ProfileSettings from './ProfileSettings';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ProfileSettings />
      </div>
    </div>
  );
};

export default App;