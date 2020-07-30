import padStart from "@common/utils/pad-start";
import getTimeParams from "@common/utils/get-time-params";


const getTime = (allSeconds, pattern = `hh:mm:ss`) => {
  const timeParams = getTimeParams(allSeconds);
  switch (pattern) {
    case `hh:mm:ss`:
      Object.keys(timeParams).forEach((param) => {
        timeParams[param] = padStart(2, `${timeParams[param]}`, 0);
      });
      return `${timeParams.hours}:${timeParams.minutes}:${timeParams.seconds}`;
    case `h mm`:
      return `${timeParams.hours}h ${timeParams.minutes}m`;

    default:
      return `${pattern} pattern isn't exist`;
  }
};

export default getTime;
