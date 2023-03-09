import { useContext, useState } from "react";

// Context
import { PodcastsContext } from "../context";
import { LoadingContext } from "@context";

const usePodcasts = () => {
  const { loading } = useContext(LoadingContext);

  const { podcasts } = useContext(PodcastsContext);

  const [search, setSearch] = useState("");

  const searchChange = (value) => {
    setSearch(value);
  };

  return { podcasts, search, loading, searchChange };
};

export default usePodcasts;
