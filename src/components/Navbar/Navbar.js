// src/components/Navbar/Navbar.js
import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/QtifyLogo.png'; // ✅ CORRECT WAY
//import logo from 'src/assets/QtifyLogo.png';
function Navbar() {

  const handleFeedbackClick = () => {
    console.log("Feedback button clicked!");
  };

  return (
    <nav className={styles.navbar}>
      
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <img 
            src={logo}                 // ✅ imported image
            alt="QTify Logo"
            className={styles.logo}
          />
        </div>
      </div>

      {/* Search Section */}
      <div className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search a song of your choice"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>🔍</button>
        </div>
      </div>

      {/* Button Section */}
      <div className={styles.buttonSection}>
        <button 
          className={styles.feedbackButton}
          onClick={handleFeedbackClick}
        >
          Give Feedback
        </button>
      </div>

    </nav>
  );
}

export default Navbar;
