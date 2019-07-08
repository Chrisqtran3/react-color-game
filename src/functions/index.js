export function generateColor() {

  let redSpectrum = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
  let greenSpectrum = Math.floor(Math.random() * (255 - 0 + 1)) + 1;
  let blueSpectrum = Math.floor(Math.random() * (255 - 0 + 1)) + 1;

  return `rgb(${redSpectrum}, ${greenSpectrum}, ${blueSpectrum})`
}