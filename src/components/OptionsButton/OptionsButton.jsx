import React from "react";
import {Button} from './OptionsButton.styled';

export const OptionsButton = ({ handleClick, name }) => {
  return (
    <Button onClick={handleClick}>
      {name}
    </Button>
  );
};