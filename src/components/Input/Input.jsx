import React from "react";
import store from "../../redux/store";
import  shortid from 'shortid';


export const Input = ({ inputLabel, inputHandler, value }) => {
  const setValueHandler = (param) => store.dispatch(inputHandler(param));

  return (
    <label htmlFor={shortid.generate()}>
      {inputLabel}
      <input
        id={shortid.generate()}
        type="number"
        onChange={(e) => setValueHandler(+e.target.value)}
        value={value}
      />
    </label>
  );
};