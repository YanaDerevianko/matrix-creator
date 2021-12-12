import  React from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux";
import  shortid from 'shortid';
import matrixActions from "../../redux/matrix/matrix-actions";
import store from '../../redux/store';

const randomNumber = () => ({
    amount: Math.floor(Math.random() * 1000),
    id: shortid.generate(),
    
  });



   const Matrix = ({numberOfRows, numberOfColumns, matrix}) => {
       useEffect(() => {
           const filledMatrix = Array(numberOfRows*numberOfColumns).fill(0).map(randomNumber);
           store.dispatch(matrixActions.createMatrix(filledMatrix));

       }, [numberOfRows, numberOfColumns])

       const gridLayout = {
        gridTemplateColumns: `repeat(${numberOfColumns + 1}, 1fr)`,
        gridTemplateRows: `repeat(${numberOfRows + 1}, 1fr)`,
       }

       const sumOfCellsInRow = Array(numberOfRows).fill(0).map((item, rowIndex)=>
       matrix.reduce((acc, mtrx, i) => {
           console.log(mtrx)
        if (
            i >= rowIndex * numberOfColumns &&
            i < (rowIndex + 1) * numberOfColumns
          ) {
            return acc + mtrx.amount;
          }
          return acc;
       },0))

let averageValuePerColumn = [];
  if (sumOfCellsInRow.length) {
    averageValuePerColumn = Array(numberOfColumns)
      .fill(0)
      .map((item, columnIndex) => {
        let acc = 0;
        for (
          let i = columnIndex;
          i <= numberOfColumns * numberOfRows - 1;
          i += numberOfColumns
        ) {
          acc += typeof matrix[i] === "undefined" ? 0 : matrix[i].amount;
        }
        return Math.floor(acc / numberOfRows);
      });
  }
console.log(averageValuePerColumn)
       
       return(
           <div>kuku</div>
       )
    }

   const mapStateToProps = (state) => ({
    matrix: state.matrixReducer.matrix,
    numberOfColumns: state.matrixReducer.numberOfColumns,
    numberOfRows: state.matrixReducer.numberOfRows,
  });

  export default connect(mapStateToProps)(Matrix);