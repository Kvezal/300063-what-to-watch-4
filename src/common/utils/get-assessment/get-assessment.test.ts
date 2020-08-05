import getAssessment from "./get-assessment";


describe(`getAssessment`, () => {
  test.each([
    [0, `Bad`],
    [1, `Bad`],
    [2, `Bad`],
    [2.9, `Bad`],
    [3, `Normal`],
    [4.9, `Normal`],
    [5, `Good`],
    [6, `Good`],
    [7, `Good`],
    [7.9, `Good`],
    [8, `Very good`],
    [9, `Very good`],
    [9.9, `Very good`],
    [10, `Awesome`],
  ])(`if rating is %p should return %p text`, (rating, textAssessment) => {
    expect(getAssessment(rating)).toBe(textAssessment);
  });
});
