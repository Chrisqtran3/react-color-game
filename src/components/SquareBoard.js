import * as React from "react";
import styles from "./styles.module.css";
import Square from "./Square";

class SquareBoard extends React.Component {
  renderSquares() {
    const { colors, changeColors, pickedColor } = this.props;

    return colors.map((color, index) => {
      return (
        <Square
          picked={pickedColor}
          changeColors={changeColors}
          color={color.color}
          key={index}
        />
      );
    });
  }

  render() {
    return <div className={styles.container}>{this.renderSquares()}</div>;
  }
}

export default SquareBoard;
