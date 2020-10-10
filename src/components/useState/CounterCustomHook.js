import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useCounter(1000);

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button onClick={() => increment(3)} className='btn btn-success'>
        + 1
      </button>
      <button onClick={reset} className='btn btn-success'>
        Reset
      </button>
      <button onClick={() => decrement(3)} className='btn btn-danger'>
        - 1
      </button>
    </>
  );
};
