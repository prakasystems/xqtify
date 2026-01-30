import React, { useState, useEffect } from 'react';
import { fetchTopAlbums } from '../../api';
import Carousel from '../Carousel/Carousel';
import AlbumCard from '../AlbumCard/AlbumCard';
import styles from './TopAlbums.module.css';

const TopAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCarousel, setShowCarousel] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTopAlbums = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTopAlbums();
        setAlbums(data);
        setError(null);
      } catch (err) {
        setError('Failed to load top albums');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getTopAlbums();
  }, []);

  const renderAlbumCard = (album) => (
    <AlbumCard key={album.id} album={album} />
  );

  if (isLoading) {
    return (
      <div className={styles.albumsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Top Albums</h2>
          <div className={styles.skeletonButton}></div>
        </div>
        <div className={styles.loadingGrid}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.skeletonCard}></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.albumsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Top Albums</h2>
        </div>
        <div className={styles.errorMessage}>{error}</div>
      </div>
    );
  }

  return (
    <section className={styles.albumsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Top Albums</h2>
        <button 
          className={styles.collapseToggleBtn}
          onClick={() => setShowCarousel(!showCarousel)}
          aria-expanded={!showCarousel}
        >
          {showCarousel ? 'Show All' : 'Collapse'}
        </button>
      </div>

      {showCarousel ? (
        <Carousel
          data={albums}
          renderComponent={renderAlbumCard}
          navId="top-albums"
        />
      ) : (
        <div className={styles.albumsGrid}>
          {albums.map(renderAlbumCard)}
        </div>
      )}
    </section>
  );
};

export default TopAlbums;