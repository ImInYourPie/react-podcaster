import React from "react";

// Feature
import {
  usePodcasts,
  PodcastItem,
  PodcastList,
  PodcastListSkeleton,
} from "@features/podcasts";

const Home = () => {
  const { podcasts, loading } = usePodcasts();

  if (loading) return <PodcastListSkeleton />;

  return (
    <PodcastList>
      {podcasts.map((podcast) => (
        <PodcastItem key={podcast.id} podcast={podcast} />
      ))}
    </PodcastList>
  );
};

export default Home;
