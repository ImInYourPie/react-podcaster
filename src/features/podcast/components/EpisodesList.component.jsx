import React from "react";

// Components
import EpisodeItem from "./EpisodeItem.component";

// Hooks
import { usePodcast } from "..";

const EpisodesList = () => {
  const { episodes } = usePodcast();
  return <div>{}</div>;
};

export default EpisodesList;
