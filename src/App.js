// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Top Albums Section */}
      <Section 
        title="Top Albums"
        fetchUrl="https://qtify-backend.labs.crio.do/albums/top"
         variant="collapse"
      />
      <Section
        title="New Albums"
        fetchUrl="https://qtify-backend.labs.crio.do/albums/new"
        variant="showAll"
      />
      {/* You can add more sections later (e.g., New Albums) */}
    </div>
  );
}

export default App;
