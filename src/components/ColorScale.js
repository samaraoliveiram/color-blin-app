import ndarray from "ndarray";

export const Protanopia = ndarray(
  new Float64Array([
    0.56667,
    0.43333,
    0.0,
    0.55833,
    0.44167,
    0.0,
    0.0,
    0.24167,
    0.75833
  ]),
  [3, 1, 3]
).step(-1, 1, 1);

export const Protanomaly = ndarray(
  new Float64Array([
    0.81667,
    0.18333,
    0.0,
    0.33333,
    0.66667,
    0.0,
    0.0,
    0.125,
    0.875
  ]),
  [3, 1, 3]
).step(-1, 1, 1);

export const Deuteranopia = ndarray(
  new Float64Array([0.625, 0.375, 0.0, 0.7, 0.3, 0.0, 0.0, 0.3, 0.7]),
  [3, 1, 3]
).step(-1, 1, 1);

export const Deuteranomaly = ndarray(
  new Float64Array([
    0.8,
    0.2,
    0.0,
    0.25833,
    0.74167,
    0.0,
    0.0,
    0.14167,
    0.85833
  ]),
  [3, 1, 3]
).step(-1, 1, 1);

export const Tritanopia = ndarray(
  new Float64Array([0.95, 0.05, 0.0, 0.0, 0.43333, 0.56667, 0.0, 0.475, 0.525]),
  [3, 1, 3]
).step(-1, 1, 1);

export const Tritanomaly = ndarray(
  new Float64Array([
    0.96667,
    0.03333,
    0.0,
    0.0,
    0.73333,
    0.26667,
    0.0,
    0.18333,
    0.81667
  ]),
  [3, 1, 3]
).step(-1, 1, 1);

export const Achromatopsia = ndarray(
  new Float64Array([
    0.299,
    0.587,
    0.114,
    0.299,
    0.587,
    0.114,
    0.299,
    0.587,
    0.114
  ]),
  [3, 1, 3]
).step(-1, 1, 1);

export const Achromatomaly = ndarray(
  new Float64Array([
    0.618,
    0.32,
    0.062,
    0.163,
    0.775,
    0.062,
    0.163,
    0.32,
    0.516
  ]),
  [3, 1, 3]
).step(-1, 1, 1);
