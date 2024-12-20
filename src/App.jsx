import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />

        <footer>
          This project was coded by{" "}
          <a 
            href="https://sdhaliwalportfolio.com" 
            target="_blank"
            rel="noopener noreferrer"
            >
            Sandeep D.
          </a>{" "}
          and is{" "}
          <a 
            href="https://github.com/Pbjsd/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a 
            href="https://thatshecodesweatherapp.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify 
          </a>
        </footer>
      </div>
    </div>
  ); 
}
