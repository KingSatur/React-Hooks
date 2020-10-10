import React, { useRef } from "react";
import "./effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  console.log(inputRef);

  const handleClick = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input ref={inputRef} className='form-control' placeholder='Su nombre' />

      <button onClick={handleClick}>Focus</button>
    </div>
  );
};
