import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./Songs.module.css";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    axios.get("https://qtify-backend.labs.crio.do/songs")
      .then(res => setSongs(res.data));

    axios.get("https://qtify-backend.labs.crio.do/genres")
      .then(res => setGenres(["All", ...res.data.data.map(g => g.key)]));
  }, []);

  const selectedGenre = genres[value];

  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter(song => song.genre.key === selectedGenre);

  return (
    <div className={styles.songsSection}>
      <h2 className={styles.title}>Songs</h2>

      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        className={styles.tabs}
        TabIndicatorProps={{ style: { backgroundColor: "#34C94B" } }}
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre} className={styles.tab} />
        ))}
      </Tabs>

      <Carousel
        data={filteredSongs}
        renderComponent={(song) => (
          <Card data={song} type="song" />
        )}
      />
    </div>
  );
};

export default Songs;
