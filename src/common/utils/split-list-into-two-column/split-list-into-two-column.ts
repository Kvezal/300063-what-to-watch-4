import {IListIntoTwoColumn} from "./interface";


const splitListIntoTwoColumn = <T>(list: T[]): IListIntoTwoColumn<T> => {
  const emptyColumnObject: IListIntoTwoColumn<T> = {
    left: [],
    right: [],
  };
  if (!list.length) {
    return emptyColumnObject;
  }
  return list.reduce((columns, item, index) => {
    const column = index % 2 ? columns.right : columns.left;
    column.push(item);
    return columns;
  }, emptyColumnObject);
};

export default splitListIntoTwoColumn;
