import { useContext, useState } from "react";

// Context
import { PodcastsContext } from "../context";

const usePodcasts = () => {
  const { podcasts } = useContext(PodcastsContext);

  const [search, setSearch] = useState("");

  const searchChange = (value) => {
    setSearch(value);
  };

  return { podcasts, search, searchChange };
};

export default usePodcasts;
