import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log("HEY");
    return () => {};
  }, []);

  useEffect(() => {
    // console.log("Form state cambio");
  }, [formState]);

  useEffect(() => {
    // console.log("Email cambio");
  }, [email]);

  const handleInputChange = ({ target }) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='Tu email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};
