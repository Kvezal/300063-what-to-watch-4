const padStart = (symbolCount, value, placeholder) => {
  const symbols = new Array(symbolCount - value.length).fill(placeholder).toString();
  return `${symbols}${value}`;
};

export default padStart;
