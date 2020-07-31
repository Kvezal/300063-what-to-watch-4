import {getTimeParams, padStart} from "@common/utils";


const getTime = (allSeconds: number, pattern = `hh:mm:ss`): string => {
  const timeParams = getTimeParams(allSeconds);
  switch (pattern) {
    case `hh:mm:ss`:
      Object.keys(timeParams).forEach((param) => {
        timeParams[param] = padStart(2, `${timeParams[param]}`, `0`);
      });
      return `${timeParams.hours}:${timeParams.minutes}:${timeParams.seconds}`;
    case `h mm`:
      return `${timeParams.hours}h ${timeParams.minutes}m`;

    default:
      return `${pattern} pattern isn't exist`;
  }
};

export default getTime;
