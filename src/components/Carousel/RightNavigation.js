import React from 'react';
import styles from './Carousel.module.css';

const RightNavigation = ({ onClick, disabled }) => {
  return (
    <button
      className={`${styles.carouselButton} ${styles.right} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Next slide"
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19.5" fill="white" stroke="#E5E5E5"/>
        <path d="M17 14L23 20L17 26" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default RightNavigation;