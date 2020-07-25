import splitListIntoTwoColumn from "./split-list-into-two-column";


describe(`splitListTwoColumn`, () => {
  test(`should split list`, () => {
    const list = [1, 2, 3, 4, 5];
    const {left, right} = splitListIntoTwoColumn(list);
    expect(left).toHaveLength(3);
    expect(right).toHaveLength(2);
  });

  test(`should contain 2 empty array if split list empty`, () => {
    const {left, right} = splitListIntoTwoColumn([]);
    expect(left).toHaveLength(0);
    expect(right).toHaveLength(0);
  });

  test(`should contain 2 empty array if split list undefined or null`, () => {
    const {left, right} = splitListIntoTwoColumn();
    expect(left).toHaveLength(0);
    expect(right).toHaveLength(0);
  });
});
