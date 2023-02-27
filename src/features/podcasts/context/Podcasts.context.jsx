import React, { createContext, useState, useEffect, useContext } from "react";

// Services
import { podcastsService } from "../services";

// Context
import { LoadingContext } from "@context";

export const PodcastsContext = createContext();

const PodcastsProvider = ({ children }) => {
  const { setLoading } = useContext(LoadingContext);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    podcastsService
      .getTop100Podcasts()
      .then((res) => {
        setPodcasts(res);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {};
  }, []);

  const value = {
    podcasts,
  };

  return (
    <PodcastsContext.Provider value={value}>
      {children}
    </PodcastsContext.Provider>
  );
};

export default PodcastsProvider;
