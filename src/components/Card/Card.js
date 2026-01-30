// src/components/Card/Card.js
import React from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import styles from './Card.module.css';

// Chip को bottom-left में position करें
const FollowChip = styled(Chip)({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  fontWeight: '600',
  fontSize: '10px',
  height: '22px',
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  '& .MuiChip-label': {
    padding: '0 8px',
  },
});

const Card = ({ data }) => {
  const { image, follows, title } = data;

  return (
    <div className={styles.card}>
      {/* Image Section */}
      <div className={styles.imageWrapper}>
        <img 
          src={image} 
          alt={`${title} Album Cover`} 
          className={styles.cardImage}
        />
        <FollowChip label={`${follows} Follows`} />
      </div>
      
      {/* ✅ White Bottom Section */}
      <div className={styles.cardInfo}>
        <p className={styles.albumTitle}>{title}</p>
      </div>
    </div>
  );
};

export default Card;