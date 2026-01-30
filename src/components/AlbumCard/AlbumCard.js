import React from 'react';
import styles from './AlbumCard.module.css';

const AlbumCard = ({ album }) => {
  return (
    <div className={styles.albumCard}>
      <div className={styles.albumImageContainer}>
        <img 
          src={album.image} 
          alt={album.title} 
          className={styles.albumImage}
          loading="lazy"
        />
        {album.follows && (
          <div className={styles.followsBadge}>
            {album.follows} {album.follows === 1 ? 'follow' : 'follows'}
          </div>
        )}
      </div>
      <div className={styles.albumInfo}>
        <h3 className={styles.albumTitle}>{album.title}</h3>
        <p className={styles.albumDescription}>
          {album.description || `${album.songs?.length || 0} songs`}
        </p>
      </div>
    </div>
  );
};

export default AlbumCard;