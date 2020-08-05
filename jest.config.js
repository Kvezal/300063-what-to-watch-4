module.exports = {
  transform: {
    "^.+\\.tsx?$": `ts-jest`,
    "^.+\\.js?$": `babel-jest`,
  },
  testRegex: `.test.(js?|jsx?|tsx?)$`,
  moduleFileExtensions: [
    `ts`,
    `tsx`,
    `js`,
    `jsx`,
    `json`,
    `node`
  ],
  moduleNameMapper: {
    "@app(.*)$": `<rootDir>/src/app/$1`,
    "@components(.*)$": `<rootDir>/src/components/$1`,
    "@common(.*)$": `<rootDir>/src/common/$1`,
    "@containers(.*)$": `<rootDir>/src/containers/$1`,
    "@hocs(.*)$": `<rootDir>/src/hocs/$1`,
    "@middlewares(.*)$": `<rootDir>/src/middlewares/$1`,
    "@pages(.*)$": `<rootDir>/src/pages/$1`,
    "@services(.*)$": `<rootDir>/src/services/$1`,
    "@store(.*)$": `<rootDir>/src/store/$1`,
  }
};
