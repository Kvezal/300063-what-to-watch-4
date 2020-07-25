import getTimeParams from "./get-time-params";


describe(`getTimeParams`, () => {
  test.each([
    [35, {hours: 0, minutes: 0, seconds: 35}],
    [125, {hours: 0, minutes: 2, seconds: 5}],
    [3700, {hours: 1, minutes: 1, seconds: 40}]
  ])(`should convert %p to %p`, (number, timeParams) => {
    expect(getTimeParams(number)).toEqual(timeParams);
  });
});
