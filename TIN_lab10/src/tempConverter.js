export const cToF = (c) => {
  return parseFloat(c) * 9 / 5 + 32;
};

export const cToK = (c) => {
  return parseFloat(c) + 273.15;
};

export const fToC = (f) => {
  return (parseFloat(f) - 32) * 5 / 9;
};

export const fToK = (f) => {
  return (parseFloat(f) + 459.67) * 5 / 9;
};

export const kToC = (k) => {
  return parseFloat(k) - 273.15;
};

export const kToF = (k) => {
  return parseFloat(k) * 9 / 5 - 459.67;
};