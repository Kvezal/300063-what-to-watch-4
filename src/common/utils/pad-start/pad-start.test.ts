import padStart from "./pad-start";


describe(`padStart`, () => {
  test.each([
    [`5`, `05`, 2, `0`],
    [`10`, `10`, 2, `0`],
    [`0`, `00`, 2, `0`],
  ])(`should convert %p number to %p`, (seconds, expectedValue, symbolCount, placeholder) => {
    const value = padStart(symbolCount, seconds, placeholder);
    expect(value).toBe(expectedValue);
  });
});
