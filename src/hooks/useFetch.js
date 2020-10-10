import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setstate({
      ...state,
      loading: true,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setstate({
          loading: false,
          error: null,
          data,
        });
      });
  }, [url]);

  return state;
};
