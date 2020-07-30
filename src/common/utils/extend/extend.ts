const extend = <T>(baseObject: T, addedObject: Partial<T>): T => {
  return Object.assign({}, baseObject, addedObject);
};

export default extend;
