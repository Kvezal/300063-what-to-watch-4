import getColorParams from "./get-color-params";


describe(`getColorParams`, () => {
  test(`should convert hex`, () => {
    const params = {
      hexColor: `#572a34`,
      offset: 0,
      alpha: 1,
    };
    const result = {
      RGBA: `rgba(87, 42, 52, 1)`,
      invertRGBA: `rgba(168, 213, 203, 1)`,
      RGBAWithOffset: `rgba(87, 42, 52, 1)`
    };
    expect(getColorParams(params)).toEqual(result);
  });

  test(`should convert hex with 3 symbols`, () => {
    const params = {
      hexColor: `#111`,
      offset: 0,
      alpha: 1,
    };
    const result = {
      RGBA: `rgba(17, 17, 17, 1)`,
      invertRGBA: `rgba(238, 238, 238, 1)`,
      RGBAWithOffset: `rgba(17, 17, 17, 1)`
    };
    expect(getColorParams(params)).toEqual(result);
  });

  test(`should convert hex with offset`, () => {
    const params = {
      hexColor: `#572a34`,
      offset: 20,
      alpha: 1,
    };
    const result = {
      RGBA: `rgba(87, 42, 52, 1)`,
      invertRGBA: `rgba(168, 213, 203, 1)`,
      RGBAWithOffset: `rgba(107, 62, 72, 1)`
    };
    expect(getColorParams(params)).toEqual(result);
  });

  test(`should convert hex with alpha chanel`, () => {
    const params = {
      hexColor: `#572a34`,
      offset: 20,
      alpha: .5,
    };
    const result = {
      RGBA: `rgba(87, 42, 52, 0.5)`,
      invertRGBA: `rgba(168, 213, 203, 0.5)`,
      RGBAWithOffset: `rgba(107, 62, 72, 0.5)`
    };
    expect(getColorParams(params)).toEqual(result);
  });
});
