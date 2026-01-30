// src/components/Search/Search.js
import React from 'react';
import styles from './Search.module.css';

function Search() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search a song of your choice"
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

export default Search;