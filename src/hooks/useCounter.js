import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [state, setstate] = useState(initialState);

  const increment = () => {
    // console.log(factor);
    // console.log(state + factor);
    setstate(state + 1);
  };

  const decrement = (factor = 1) => {
    setstate(state - factor);
  };

  const reset = () => {
    setstate(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};
