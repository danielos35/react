import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState((v) => ({ ...v, isLoading: true }));
    const res = await fetch(url);
    const data_res = await res.json();
    setState((v) => ({ data: data_res, hasError: null, isLoading: false }));
  };

  useEffect(() => {
    getFetch();
    return () => {};
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    has: state.hasError,
  };
};
