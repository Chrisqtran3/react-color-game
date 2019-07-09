import * as React from "react";
import styles from "./styles.module.css";

export default function Square({ color }) {
  const style = {
    backgroundColor: color
  };
  return <div style={style} className={styles.square} />;
}
