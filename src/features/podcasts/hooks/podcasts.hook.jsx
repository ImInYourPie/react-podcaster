import { useContext } from "react";

// Context
import { PodcastsContext } from "../context";

const usePodcasts = () => {
  const { podcasts } = useContext(PodcastsContext);

  console.log(
    "🚀 ~ file: podcasts.hook.jsx:8 ~ usePodcasts ~ podcasts:",
    podcasts
  );

  return { podcasts };
};

export default usePodcasts;
