import React, { useEffect, useState } from "react";
import { PodcastProvider } from "./context/PodcastContext";
import { genres } from "./data";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import GenreFilter from "./components/GenreFilter";
import PaginationModeSelector from "./components/PaginationModeSelector";
import PodcastGrid from "./components/PodcastGrid";
import Pagination from "./components/Pagination";
import styles from "./App.module.css";
import "../styles.css";

export default function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    let cancelled = false;
    async function fetchShows() {
      try {
        const res = await fetch("https://podcast-api.netlify.app/shows");
        if (!res.ok) throw new Error("Failed to fetch shows");
        const data = await res.json();
        if (!cancelled) setShows(data);
      } catch (err) {
        // swallow for now - UI shows no results
        console.error(err);
      }
    }

    fetchShows();
    return () => (cancelled = true);
  }, []);

  return (
    <PodcastProvider initialPodcasts={shows}>
      <div>
        <Header />

        <div className={styles.controls}>
          <SearchBar />
          <GenreFilter genres={genres} />
          <SortSelect />
          <PaginationModeSelector />
        </div>

        <PodcastGrid genres={genres} />

        <Pagination />
      </div>
    </PodcastProvider>
  );
}
