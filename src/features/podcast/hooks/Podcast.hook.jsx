import { useContext } from "react";

// Context
import { PodcastContext } from "../context";
import { LoadingContext } from "@context";

const usePodcast = () => {
  const { loading } = useContext(LoadingContext);
  const { podcast, episodes, episodesCount } = useContext(PodcastContext);

  return { podcast, episodes, episodesCount, loading };
};

export default usePodcast;
