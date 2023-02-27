import { useContext } from "react";

// Context
import { LoadingContext } from "@context";

const useHeader = () => {
  const { loading } = useContext(LoadingContext);

  return { loading };
};

export default useHeader;
