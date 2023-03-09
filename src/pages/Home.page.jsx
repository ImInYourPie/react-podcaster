import React from "react";

// Feature
import { usePodcasts, PodcastItem, PodcastList } from "@features/podcasts";

const Home = () => {
  const { podcasts } = usePodcasts();

  return (
    <PodcastList>
      {podcasts.map((podcast) => (
        <PodcastItem key={podcast.id} podcast={podcast} />
      ))}
    </PodcastList>
  );
};

export default Home;
