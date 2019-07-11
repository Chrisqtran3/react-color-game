export function generateRandomColors(isHardMode) {
  const hardSquares = 6;
  const easySquares = 3;
  const arr = [];

  const squares = isHardMode ? hardSquares : easySquares;

  for (let i = 0; i < squares; i++) {
    arr.push({
      color: generateColor()
    });
  }

  return arr;
}

export function randomIndex(length) {
  return Math.floor(Math.random() * length);
}

function generateColor() {
  let redSpectrum = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
  let greenSpectrum = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
  let blueSpectrum = Math.floor(Math.random() * (255 - 0 + 1)) + 1;

  return `rgb(${redSpectrum}, ${greenSpectrum}, ${blueSpectrum})`;
}
