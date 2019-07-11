import * as React from "react";
import styles from "./styles.module.css";

class Stripe extends React.Component {
  render() {
    const { toggle, reset } = this.props;
    return (
      <div className={styles.stripe}>
        <span id="messageDisplay" />
        <button onClick={() => reset()} className={styles.button}>
          New Colors
        </button>
        <button onClick={() => toggle()} className={styles.button}>
          Toggle Difficulty
        </button>
      </div>
    );
  }
}

export default Stripe;
