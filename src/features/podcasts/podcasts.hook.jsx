import { useState, useEffect, useContext } from "react";

// Services
import { podcastsService } from "@services";

// Context
import { LoadingContext } from "@context";

const usePodcasts = () => {
  const { setLoading } = useContext(LoadingContext);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    podcastsService
      .list()
      .then((res) => {
        setPodcasts(res);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {};
  }, []);

  return { podcasts };
};

export default usePodcasts;
