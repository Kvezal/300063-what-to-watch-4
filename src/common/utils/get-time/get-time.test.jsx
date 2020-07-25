import getTime from "./get-time";

describe(`getTime`, () => {
  test.each([
    [35, `00:00:35`],
    [125, `00:02:05`],
    [3700, `01:01:40`]
  ])(`should convert %p seconds to %p time`, (seconds, expectedTime) => {
    const time = getTime(seconds);
    expect(time).toBe(expectedTime);
  });
});
