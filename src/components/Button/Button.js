// src/components/Button/Button.js
import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, children }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

// ✅ Default export add करें
export default Button;