import React from "react";
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import matrixActions from "../../redux/matrix/matrix-actions";
import AverageValueOfColumn from "../AverageValueOfColumn/AverageValueOfColumn";
import MatrixCell from "../MatrixCell/MatrixCell";
import TotalSumInRow from "../TotalSumInRow/TotalSumInRow";
import store from "../../redux/store";
import {MatrixTable} from './Matrix.styled';


const randomNumber = () => ({
  amount: Math.floor(Math.random() * 1000),
  id: shortid.generate(),
});

const Matrix = ({ numberOfRows, numberOfColumns, matrix }) => {
  useEffect(() => {
    const filledMatrix = Array(numberOfRows * numberOfColumns)
      .fill(0)
      .map(randomNumber);
    store.dispatch(matrixActions.createMatrix(filledMatrix));
  }, [numberOfRows, numberOfColumns]);

  const gridLayout = {
    gridTemplateColumns: `repeat(${numberOfColumns + 1}, 1fr)`,
    gridTemplateRows: `repeat(${numberOfRows + 1}, 1fr)`,
  };

  const sumOfCellsInRow = Array(numberOfRows)
    .fill(0)
    .map((item, rowIndex) =>
      matrix.reduce((acc, mtrx, i) => {
        if (
          i >= rowIndex * numberOfColumns &&
          i < (rowIndex + 1) * numberOfColumns
        ) {
          return acc + mtrx.amount;
        }
        return acc;
      }, 0)
    );

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

  return (
    <MatrixTable style={gridLayout}>
      {matrix.map((item, index) =>
        index % numberOfColumns === numberOfColumns - 1 ? (
          <Fragment key={shortid.generate()}>
            <MatrixCell
              key={item.id}
              matrixItem={item}
              percentage={
                item.amount /
                sumOfCellsInRow[Math.floor(index / numberOfColumns)]
              }
            />
             <TotalSumInRow
              key={shortid.generate()}
              amount={sumOfCellsInRow[Math.floor(index / numberOfColumns)]}
            />
          </Fragment>
        ) : (
          <MatrixCell
            key={item.id}
            matrixItem={item}
            percentage={
              item.amount / sumOfCellsInRow[Math.floor(index / numberOfColumns)]
            }
          />
        )
      )}
      {averageValuePerColumn.map((item) => (
        <AverageValueOfColumn key={shortid.generate()} amount={item} />
      ))}
    </MatrixTable>
  );
};

const mapStateToProps = (state, props) => ({
  matrix: state.matrixReducer.matrix,
  numberOfColumns: state.matrixReducer.numberOfColumns,
  numberOfRows: state.matrixReducer.numberOfRows
});

export default connect(mapStateToProps)(Matrix);
