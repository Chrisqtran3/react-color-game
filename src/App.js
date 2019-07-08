import React from "react";
import "./App.css";
import SquareBoard from "./components/SquareBoard";
import { generateColor } from "./functions/index";

class App extends React.Component {
  state = {
    easyMode: true,
    squares: [],
    currentSquare: null,
    gameOver: false
  };

  toggleDifficulty = () => {
    this.setState({ easyMode: !this.state.easyMode });
  };

  componentDidMount() {
    this.createSquares(this.state.easyMode);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.easyMode !== prevState.easyMode) {
      this.createSquares(this.state.easyMode);
    }
  }

  renderCurrentColor() {
    const { currentSquare } = this.state;

    if (!currentSquare) {
      return <h2>loading...</h2>;
    }

    return <h2>{currentSquare.color}</h2>;
  }

  createSquares(easyMode) {
    let numberOfSquares;
    if (easyMode) {
      numberOfSquares = 3;
    } else {
      numberOfSquares = 6;
    }
    const squares = [];
    for (let i = 0; i < numberOfSquares; i++) {
      squares.push({
        color: generateColor()
      });
    }

    const last = squares.length - 1;
    const randomIndex = Math.floor(Math.random() * (last - 0 + 1) + 0);

    this.setState({
      squares,
      currentSquare: squares[randomIndex]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Great RGB Color Game</h1>
          {this.renderCurrentColor()}
          <button
            onClick={() => this.toggleDifficulty()}
            style={{ margin: "10px 0" }}
          >
            Toggle Difficulty
          </button>
          <SquareBoard squares={this.state.squares} />
        </header>
      </div>
    );
  }
}

export default App;
