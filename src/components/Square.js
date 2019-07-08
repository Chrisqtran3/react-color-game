import React from "react";

export default function Square({ color }) {
  const squareStyle = {
    height: "200px",
    width: "200px",
    backgroundColor: color,
    borderRadius: "10px",
    margin: "10px",
    display: "inline"
  };
  return <div style={squareStyle} />;
}
