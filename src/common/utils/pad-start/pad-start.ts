const padStart = (symbolCount: number, value: string, placeholder: string): string => {
  const symbols = new Array(symbolCount - value.length).fill(placeholder).toString();
  return `${symbols}${value}`;
};

export default padStart;
