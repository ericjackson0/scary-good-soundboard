import React from 'react';
import rick from './assets/RJ-01.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This (soundboard) is good! <b>Scary good</b>!
        </p>
        <img src={rick} className="rj-logo" alt="logo" />
        <a
          className="rj-donation-link"
          href="https://www.roswellpark.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consider donating to Roswell Park in memory of Rick.
        </a>
      </header>
    </div>
  );
}

export default App;
