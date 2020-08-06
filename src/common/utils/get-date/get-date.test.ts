import {getDate, getTime, getTimeParams} from "./get-date";


describe(`getDate`, () => {
  test.each([
    [`2019-05-08T14:13:56.569Z`, `May 8, 2019`],
    [`2020-06-23T10:54:44.818Z`, `June 23, 2020`],
    [`2020-06-21T10:54:44.818Z`, `June 21, 2020`],
  ])(`should convert %p to %p`, (timeStamp, date) => {
    expect(getDate(timeStamp)).toBe(date);
  });
});

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

describe(`getTimeParams`, () => {
  test.each([
    [35, {hours: 0, minutes: 0, seconds: 35}],
    [125, {hours: 0, minutes: 2, seconds: 5}],
    [3700, {hours: 1, minutes: 1, seconds: 40}]
  ])(`should convert %p to %p`, (number, timeParams) => {
    expect(getTimeParams(number)).toEqual(timeParams);
  });
});
