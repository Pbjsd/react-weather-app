import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://sdhaliwalportfolio.com" target="_blank">
            Sandeep D.
          </a>{" "}
          and is{" "}
          <a 
            href="https://github.com/Pbjsd/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  ); 
}