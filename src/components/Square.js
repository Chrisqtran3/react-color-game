import * as React from "react";
import styles from "./styles.module.css";

export default class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialColor: props.color
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.color !== prevProps.color) {
      this.setState({ initialColor: this.props.color });
    }
  }

  onSquareClick = color => {
    const { picked, changeColors } = this.props;

    if (color === picked.color) {
      changeColors();
    } else {
      this.setState({ initialColor: "#232323" });
    }
  };

  render() {
    const { initialColor } = this.state;
    const style = {
      backgroundColor: initialColor
    };
    return (
      <div
        style={style}
        onClick={() => this.onSquareClick(initialColor)}
        className={styles.square}
      />
    );
  }
}
