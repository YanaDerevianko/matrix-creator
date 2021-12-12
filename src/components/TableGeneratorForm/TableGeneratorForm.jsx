import React from "react";
import { connect } from "react-redux";
import matrixActions from "../../redux/matrix/matrix-actions";
import { Input } from "../Input/Input";
import { OptionsButton } from "../OptionsButton/OptionsButton";


const inputsArray = [
  {
    action: matrixActions.setRows,
    text: "Row Number",
  },
  {
    action: matrixActions.setColumns,
    text: "Column Number",
  },
];

const inputField = (label) => (
  
  <Input
    key={label.text.split(" ").join("")}
    inputLabel={label.text}
    inputHandler={label.action}
    value={label.value}
  />
);

const TableGeneratorForm = ({
  numberOfColumns,
  numberOfRows,
  matrix,
  onIncrement,
  onDecrement,
}) => {
  inputsArray[0].value = numberOfRows;
  inputsArray[1].value = numberOfColumns;
  return (
    <>
      <form>{inputsArray.map(inputField)}</form>
      {matrix.length > 0 ? (
        <>
          <OptionsButton handleClick={onIncrement} name="Add new row" />
          <OptionsButton handleClick={onDecrement} name="Delete row" />
        </>
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  numberOfColumns: state.matrixReducer.numberOfColumns,
  numberOfRows: state.matrixReducer.numberOfRows,
  matrix: state.matrixReducer.matrix,
});

const mapDispatchToProps = {
  onIncrement: matrixActions.addRow,
  onDecrement: matrixActions.deleteRow,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableGeneratorForm);
