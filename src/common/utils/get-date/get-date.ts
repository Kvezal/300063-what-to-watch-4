import {padStart} from "@common/utils";

import {ETimeMeasure, ETimePattern, ITimeParams} from "./interface";


const getDate = (timeStamp: string): string => {
  const date = new Date(timeStamp);
  return date.toLocaleDateString(`en-US`, {
    day: `numeric`,
    month: `long`,
    year: `numeric`
  });
};

const getTimeParams = (allSeconds: number): ITimeParams => ({
  seconds: Math.floor(allSeconds % ETimeMeasure.SECONDS_IN_MINUTE),
  minutes: Math.floor(allSeconds / ETimeMeasure.SECONDS_IN_MINUTE % ETimeMeasure.SECONDS_IN_MINUTE),
  hours: Math.floor(allSeconds / ETimeMeasure.SECONDS_IN_HOUR),
});

const getTime = (allSeconds: number, pattern: ETimePattern = ETimePattern.HOURS_MINUTES_SECONDS): string => {
  const timeParams = getTimeParams(allSeconds);
  switch (pattern) {
    case ETimePattern.HOURS_MINUTES_SECONDS:
      Object.keys(timeParams).forEach((param) => {
        timeParams[param] = padStart(2, `${timeParams[param]}`, `0`);
      });
      return `${timeParams.hours}:${timeParams.minutes}:${timeParams.seconds}`;
    case ETimePattern.HOURS_MINUTES:
      return `${timeParams.hours}h ${timeParams.minutes}m`;

    default:
      return `${pattern} pattern isn't exist`;
  }
};

export {
  getDate,
  getTime,
  getTimeParams,
};
