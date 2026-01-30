// src/components/Section/Section.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import styles from './Section.module.css';

const Section = ({
  title,
  fetchUrl,
  variant = "collapse" // "collapse" | "showAll"
}) => {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(variant === "collapse");
  const [showAll, setShowAll] = useState(false);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  // Decide which data to show
  const visibleData =
    variant === "showAll" && !showAll ? data.slice(0, 6) : data;

  return (
    <div className={styles.section}>
      {/* Header */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>

        {/* Collapse Variant (Top Albums) */}
        {variant === "collapse" && (
          <button
            className={styles.collapseButton}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "Show All" : "Collapse"}
          </button>
        )}

        {/* ShowAll Variant (New Albums) */}
        {variant === "showAll" && (
          <button
            className={styles.showAllButton}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        )}
      </div>

      {/* Grid */}
      {(!collapsed || variant === "showAll") && (
        <div className={styles.cardGrid}>
          {visibleData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
