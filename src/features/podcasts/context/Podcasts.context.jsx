import React, { createContext, useState, useEffect, useContext } from "react";

// Services
import { podcastsService } from "../services";

// Context
import { LoadingContext } from "@context";

// Hooks
import { useLocalStorage } from "@hooks";

// Utils
import { dateUtils } from "@utils";

export const PodcastsContext = createContext();

const PodcastsProvider = ({ children }) => {
  const [storedValue, setStoredValue] = useLocalStorage("podcast-list");
  const { setLoading } = useContext(LoadingContext);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    if (!storedValue) {
      getPodcasts();
      return;
    }

    const daysPassed = dateUtils.getDaysPassed(
      new Date(),
      new Date(storedValue.updatedAt)
    );

    if (daysPassed >= 1) {
      getPodcasts();
      return;
    }

    commitPodcastsToMemory(storedValue.value);

    return () => {};
  }, []);

  const getPodcasts = () =>
    podcastsService
      .getTop100Podcasts()
      .then((res) => {
        commitPodcastsToMemory(res);
      })
      .finally(() => {
        setLoading(false);
      });

  const saveToLocalStorage = (value) => {
    setStoredValue({
      updatedAt: new Date().toUTCString(),
      value,
    });
  };

  const commitPodcastsToMemory = (value) => {
    setPodcasts(value);
    saveToLocalStorage(value);
    setLoading(false);
  };

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
