const extend = <TBaseObject, TAdditionalObject>(baseObject: TBaseObject, addedObject: TAdditionalObject): TBaseObject & TAdditionalObject => {
  return Object.assign({}, baseObject, addedObject);
};

export default extend;
