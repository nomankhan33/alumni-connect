import React from 'react';
import Header from '../components/header/Header1';
import Profile from '../components/profile/Profile';
import Feed from '../components/Feed/Feed';
import './Home.css';

const Home = () => {
  return (
    <div className="app-container">  
      <Header /> 
      
      <div className="main-content">
        <aside className="sidebar">
          <Profile />
        </aside>
        
        <main className="content-area">
          <Feed />
        </main>
      </div>
    </div>
  );
};

export default Home;