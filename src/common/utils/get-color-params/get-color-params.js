const getRGBA = (hex) => {
  return {
    red: hex >> 16 & 255,
    green: hex >> 8 & 255,
    blue: hex & 255,
  };
};

const getColorParams = (params) => {
  const {hexColor, offset = 0, alpha = 1} = params;

  let colors = hexColor.replace(`#`, ``).split(``);
  if (colors.length === 3) {
    colors = [colors[0], colors[0], colors[1], colors[1], colors[2], colors[2]];
  }
  const hex = `0x${colors.join(``)}`;
  const {red, green, blue} = getRGBA(hex);

  return {
    RGBA: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
    invertRGBA: `rgba(${255 - red}, ${255 - green}, ${255 - blue}, ${alpha})`,
    RGBAWithOffset: `rgba(${red + offset}, ${green + offset}, ${blue + offset}, ${alpha})`,
  };
};

export default getColorParams;
