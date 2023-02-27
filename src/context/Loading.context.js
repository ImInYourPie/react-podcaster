import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const value = {
    loading,
    setLoading,
  };

  return (
    <LoadingProvider.Provider value={value}>
      {children}
    </LoadingProvider.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoadingProvider;
