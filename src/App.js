import * as React from "react";
import styles from "./app.module.css";
import Stripe from "./components/Stripe";
import SquareBoard from "./components/SquareBoard";
import { generateRandomColors, randomIndex } from "./functions/index";

export default class App extends React.Component {
  state = {
    colors: [],
    pickedColor: null,
    isHardMode: true
  };

  toggleDifficulty = () => {
    this.setState(
      {
        isHardMode: !this.state.isHardMode
      },
      () => this.createSquares()
    );
  };

  componentDidMount() {
    this.createSquares();
  }

  createSquares = () => {
    const colors = generateRandomColors(this.state.isHardMode);
    const pickedIndex = randomIndex(colors.length);

    this.setState({
      colors,
      pickedColor: colors[pickedIndex]
    });
  };

  changeSquareColors = () => {
    const newColors = this.state.colors.map(square => {
      square.color = this.state.pickedColor.color;
      return square;
    });

    this.setState({ colors: newColors });
  };

  renderColor = () => {
    const { pickedColor } = this.state;

    if (!pickedColor) return "Loading...";

    return pickedColor.color;
  };

  render() {
    const { pickedColor, colors } = this.state;
    return (
      <div>
        <h1 className={styles.heading}>
          The Great
          <br />
          <span id="colorDisplay">{this.renderColor()}</span>
          <br />
          Color Game
        </h1>
        <Stripe toggle={this.toggleDifficulty} reset={this.createSquares} />
        <SquareBoard
          changeColors={this.changeSquareColors}
          pickedColor={pickedColor}
          colors={colors}
        />
      </div>
    );
  }
}
