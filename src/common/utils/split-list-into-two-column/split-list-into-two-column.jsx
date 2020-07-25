const splitListIntoTwoColumn = (list) => {
  const emptyColumnObject = {
    left: [],
    right: [],
  };
  if (!list) {
    return emptyColumnObject;
  }
  return list.reduce((columns, item, index) => {
    const column = index % 2 ? columns.right : columns.left;
    column.push(item);
    return columns;
  }, emptyColumnObject);
};

export default splitListIntoTwoColumn;
