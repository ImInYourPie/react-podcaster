import React, { createContext, useState, useEffect, useContext } from "react";

// Services
import { podcastService } from "../services";

// Context
import { LoadingContext } from "@context";

// Hooks
import { useLocalStorage } from "@hooks";

// Utils
import { dateUtils } from "@utils";
import { useNavigate, useParams } from "react-router-dom";

export const PodcastContext = createContext();

const PodcastProvider = ({ children }) => {
  const { podcastId } = useParams();
  const navigate = useNavigate();
  const [storedValue, setStoredValue] = useLocalStorage(`podcast-${podcastId}`);
  const { setLoading } = useContext(LoadingContext);
  const [podcast, setPodcast] = useState({});

  const [episodes, setEpisodes] = useState([]);
  const [episodesCount, setEpisodesCount] = useState(0);

  useEffect(() => {
    const init = () => {
      try {
        setLoading(true);

        if (!storedValue) {
          getPodcast();
          return;
        }

        const daysPassed = dateUtils.getDaysPassed(
          new Date(),
          new Date(storedValue.updatedAt)
        );

        if (daysPassed >= 1) {
          getPodcast();
          return;
        }

        commitPodcastToMemory(storedValue.value);
      } catch (error) {
        navigate("/");
      }
    };

    init();
  }, []);

  const getPodcast = () =>
    podcastService
      .getPodcast(podcastId)
      .then((res) => {
        commitPodcastToMemory(res);
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

  const commitPodcastToMemory = (value) => {
    setPodcast(value.podcast);
    setEpisodes(value.episodes);
    setEpisodesCount(value.episodesCount);
    saveToLocalStorage(value);
    setLoading(false);
  };

  const value = {
    podcast,
    episodes,
    episodesCount,
  };

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
};

export default PodcastProvider;
