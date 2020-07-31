export interface IColor {
  hexColor: string;
  offset?: number;
  alpha?: number;
}

export interface IHEXColor {
  red: number;
  green: number;
  blue: number;
}

export interface IColorParams {
  RGBA: string;
  invertRGBA: string;
  RGBAWithOffset: string;
}
