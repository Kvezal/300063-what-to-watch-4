import {IColor, IColorParams, IHEXColor} from "@common/utils/get-color-params/interface";

const BYTE = 255;
const HALF_BYTE = 127;
const SHORT_HEX_SYMBOLS_COUNT = 3;
const BASE_COLORS_COUNT = 3;

const getRGBA = (hex: string): IHEXColor => {
  return {
    red: +hex >> 16 & BYTE,
    green: +hex >> 8 & BYTE,
    blue: +hex & BYTE,
  };
};

const getRGBAWithOffset = (colors: IHEXColor, offset: number): IHEXColor => {
  const {red, green, blue} = colors;
  const averageColor = (red + green + blue) / BASE_COLORS_COUNT;
  const currentOffset = averageColor > HALF_BYTE ? -offset : offset;
  return {
    red: red + currentOffset,
    green: green + currentOffset,
    blue: blue + currentOffset,
  };
};

const getColorParams = (params: IColor): IColorParams => {
  const {hexColor, offset = 0, alpha = 1} = params;

  let colors = hexColor.replace(`#`, ``).split(``);
  if (colors.length === SHORT_HEX_SYMBOLS_COUNT) {
    colors = colors.reduce((acc, color) => acc.concat([color, color]), []);
  }
  const hex = `0x${colors.join(``)}`;
  const colorParams = getRGBA(hex);
  const RGBAWithOffset = getRGBAWithOffset(colorParams, offset);

  return {
    RGBA: `rgba(${colorParams.red}, ${colorParams.green}, ${colorParams.blue}, ${alpha})`,
    invertRGBA: `rgba(${BYTE - colorParams.red}, ${BYTE - colorParams.green}, ${BYTE - colorParams.blue}, ${alpha})`,
    RGBAWithOffset: `rgba(${RGBAWithOffset.red}, ${RGBAWithOffset.green}, ${RGBAWithOffset.blue}, ${alpha})`,
  };
};

export default getColorParams;
