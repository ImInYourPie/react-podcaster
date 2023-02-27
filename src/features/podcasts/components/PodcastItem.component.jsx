import React from "react";
import PropTypes from "prop-types";

const PodcastItem = ({ imageUrl, name }) => {
  return <div>{name}</div>;
};

PodcastItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PodcastItem;
