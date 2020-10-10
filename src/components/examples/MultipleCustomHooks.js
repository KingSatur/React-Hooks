import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./effects.css";

export const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = Boolean(data) && data[0];

  console.log(author, quote);

  return (
    <div>
      <h1>Breaking Bad quotes</h1>
      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-0'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}

      <button className='btn btn-primary' onClick={increment}>
        Siguiente Quote
      </button>
    </div>
  );
};
