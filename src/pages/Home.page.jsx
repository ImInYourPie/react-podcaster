import React from "react";

// Feature
import { usePodcasts, PodcastItem, PodcastList } from "@features/podcasts";

const Home = () => {
  const { podcasts } = usePodcasts();

  return (
    <div>
      <PodcastList>
        {podcasts.map((podcast) => (
          <PodcastItem key={podcast.id} />
        ))}
      </PodcastList>
    </div>
  );
};

export default Home;
