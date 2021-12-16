import React from "react";
import {AverageColumn} from './AverageValueOfColumn.styled'


const AverageValueOfColumn = ({ amount }) => (
  <AverageColumn>{amount}</AverageColumn>
);

export default AverageValueOfColumn;