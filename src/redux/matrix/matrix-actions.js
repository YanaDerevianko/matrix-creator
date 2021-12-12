import { createAction } from "@reduxjs/toolkit";

const createMatrix = createAction("matrix/create");
const addRow = createAction("matrix/addRow");
const deleteRow = createAction("matrix/deleteRow");
const setRows = createAction("matrix/setRows");
const setColumns = createAction("matrix/setColumns");

export default {
  createMatrix,
  addRow,
  deleteRow,
  setRows,
  setColumns,
};
