// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import './App.css';
import Songs from "./components/Songs/Songs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      <Section
        title="Top Albums"
        fetchUrl="https://qtify-backend.labs.crio.do/albums/top"
      />

      <Section
        title="New Albums"
        fetchUrl="https://qtify-backend.labs.crio.do/albums/new"
      />

      {/* 🔥 SONGS SECTION */}
      <Songs />
    </div>
  );
}

export default App;
