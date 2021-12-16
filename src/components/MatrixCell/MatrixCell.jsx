import React, { useState } from "react";
import { connect } from "react-redux";
import store from '../../redux/store';
import matrixActions from "../../redux/matrix/matrix-actions";

const MatrixCell = ({ matrix, amount, id, percentage }) => {

    const [isPercentage, setPercentage] = useState(false);
  
    const percentageToSrt = (percent) => `${Number(percent * 100).toFixed(1)}%`;
  
    const percentageStyle = {
      backgroundImage: `linear-gradient(to right, gray 0% ${percentageToSrt(
        percentage
      )}, white ${percentageToSrt(percentage)} 100%)`,
      color: "black",
    };
  
    const onClickMatrixCell = (id) => {
      const incrementItemAmount = (item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item;
      store.dispatch(matrixActions.createMatrix(matrix.map(incrementItemAmount)));
    };
  
    const onMouseEnterHandler = () => setPercentage(true);
  
    const onMouseLeaveHandler = () => setPercentage(false);
  
    return (
      <button
        type="button"
        style={isPercentage ? percentageStyle : {}}
        onClick={() => onClickMatrixCell(id)}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        {isPercentage ? (
          <span>{percentageToSrt(percentage)}</span>
        ) : (
          <span>{amount}</span>
        )}
      </button>
    );
  };
  const mapStateToProps = (state, props) => ({
    amount: props.matrixItem.amount,
    id: props.matrixItem.id,
    matrix: state.matrixReducer.matrix,
    percentage: props.percentage,
  });
  
  export default connect(mapStateToProps)(MatrixCell);