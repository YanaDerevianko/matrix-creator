import React from "react";

export const OptionsButton = ({ handleClick, name }) => {
  return (
    <button onClick={handleClick}>
      {name}
    </button>
  );
};