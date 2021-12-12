import { combineReducers, createReducer } from "@reduxjs/toolkit";
import matrixActions from "./matrix-actions";

const addRow = (state, action) => {
  return { ...state, numberOfRows: state.numberOfRows + 1 };
};
const deleteRow = (state, action) => {
  return { ...state, numberOfRows: state.numberOfRows - 1 };
};
const setRows = (state, action) => {
  return { ...state, numberOfRows: action.payload };
};
const setColumns = (state, action) => {
  return { ...state, numberOfColumns: action.payload };
};
const createMatrix = (state, action) => {
  return { ...state, matrix: action.payload };
};

const initialState = {
  numberOfRows: 0,
  numberOfColumns: 0,
  matrix: [],
};

const matrixReducer = createReducer(initialState, {
  [matrixActions.addRow]: addRow,
  [matrixActions.deleteRow]: deleteRow,
  [matrixActions.setRows]: setRows,
  [matrixActions.setColumns]: setColumns,
  [matrixActions.createMatrix]: createMatrix,
});
export default combineReducers({
    matrixReducer,
  });