import React, { useState } from "react";
import "./counter.css";

export default function CounterApp() {
  //   const [{ counter1, counter2 }, setCounter] = useState({
  //     counter1: 10,
  //     counter2: 20,
  //   });

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
  });

  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Counter2 {counter1}</h1>
      <h1>Counter1 {counter2}</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() => {
          //   setstate(state + 1);
          //   setCounter({ counter1: counter1 + 1 });
          setState({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </>
  );
}
