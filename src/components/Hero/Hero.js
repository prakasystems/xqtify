// src/components/Hero/Hero.js
import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  // Green tint headphones image
  const headphonesUrl = "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=400&fit=crop&crop=center";
  
  return (
    <section className={styles.heroSection}>
      {/* Image on left side */}
      <div className={styles.heroImage}>
        <img 
          src={headphonesUrl} 
          alt="Green Headphones" 
          className={styles.headphonesImg}
        />
      </div>
      
      {/* Text content on right side */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>100 Thousand Songs, ad-free</h1>
        <h2 className={styles.heroSubtitle}>Over thousands podcast episodes</h2>
      </div>
    </section>
  );
}

export default Hero;