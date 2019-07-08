import React from "react";
import Square from "./Square";

export default function SquareBoard({ squares }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "80%",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      {squares.map((square, index) => {
        return <Square key={index} color={square.color} />;
      })}
    </div>
  );
}
