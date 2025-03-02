import React from 'react';
import logo from './logo.svg';
import './Home.css';


const Home = () => {
  return (
    <div>
    <div><h1>Welcome to Home Page</h1>
        <h1>Student Name: Sumayya Ali</h1>
        <h1>Student Number: 23250722</h1></div>

        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         </header>
      </div>
      </div>
  );
};

export default Home;