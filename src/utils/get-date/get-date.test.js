import getDate from "./get-date";


describe(`getDate`, () => {
  test.each([
    [`2019-05-08T14:13:56.569Z`, `May 8, 2019`],
    [`2020-06-23T10:54:44.818Z`, `June 23, 2020`],
    [`2020-06-21T10:54:44.818Z`, `June 21, 2020`],
  ])(`should convert %p to %p`, (timeStamp, date) => {
    expect(getDate(timeStamp)).toBe(date);
  });
});
