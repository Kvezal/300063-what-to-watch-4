import React from "react";


const splitListIntoTwoColumn = (Component, list) => {
  const emptyColumnObject = {
    left: [],
    right: [],
  };
  if (!list) {
    return emptyColumnObject;
  }
  return list.reduce((columns, item, index) => {
    const review = <Component key={index} {...item}/>;
    const column = index % 2 ? columns.right : columns.left;
    column.push(review);
    return columns;
  }, emptyColumnObject);
};

export default splitListIntoTwoColumn;
