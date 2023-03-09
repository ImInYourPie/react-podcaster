import { useContext } from "react";

// Context
import { LoadingContext } from "@context";

const useLoading = () => useContext(LoadingContext);

export default useLoading;
