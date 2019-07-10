import * as React from "react";
import styles from "./styles.module.css";

class Stripe extends React.Component {
  render() {
    const { squares, reset, easyClick, hardClick } = this.props;
    const easyBtn = squares === 6 ? styles.button : styles.selected;
    const hardBtn = squares === 6 ? styles.selected : styles.button;
    return (
      <div className={styles.stripe}>
        <button
          onClick={() => reset(squares)}
          className={styles.button}
          id="reset">
          New Colors
        </button>
        <span id="messageDisplay" />
        <button onClick={() => easyClick()} className={easyBtn}>
          Easy
        </button>
        <button onClick={() => hardClick()} className={hardBtn}>
          Hard
        </button>
      </div>
    );
  }
}

export default Stripe;
