import * as React from "react";
import styles from "./app.module.css";
import Stripe from "./components/Stripe";
import SquareBoard from "./components/SquareBoard";
import { generateRandomColors } from "./functions/index";

const hardSquares = 6;
const easySquares = 3;

export default class App extends React.Component {
  state = {
    numberOfSquares: 6,
    colors: [],
    pickedColor: null,
    isHardMode: true
  };

  easyBtnClick = () => {
    this.setState({
      numberOfSquares: 3,
      colors: generateRandomColors(3)
    });
  };

  hardBtnClick = () => {
    this.setState({
      numberOfSquares: 6,
      colors: generateRandomColors(6)
    });
  };

  toggleDifficulty = () => {
    this.setState({
      isHardMode: !this.state.isHardMode
    });
  };

  componentDidMount() {
    this.setState({ colors: generateRandomColors(this.state.numberOfSquares) });
  }

  reset = numberOfSquares => {
    this.setState({ colors: generateRandomColors(numberOfSquares) });
  };

  render() {
    console.log(this.state.isHardMode);
    return (
      <div>
        <h1 className={styles.heading}>
          The Great
          <br />
          <span id="colorDisplay">RGB</span>
          <br />
          Color Game
        </h1>
        <Stripe
          toggle={this.toggleDifficulty}
          reset={this.reset}
          squares={this.state.numberOfSquares}
          easyClick={this.easyBtnClick}
          hardClick={this.hardBtnClick}
        />
        <SquareBoard colors={this.state.colors} />
      </div>
    );
  }
}
