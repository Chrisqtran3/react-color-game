import * as React from "react";
import styles from "./styles.module.css";
import Square from "./Square";

class SquareBoard extends React.Component {
  renderSquares() {
    const { colors } = this.props;

    return colors.map((color, index) => {
      return <Square color={color.color} key={index} />;
    });
  }
  render() {
    return <div className={styles.container}> {this.renderSquares()} </div>;
  }
}

export default SquareBoard;
