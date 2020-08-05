import {ITimeParams, ETimeMeasure} from "./interface";


const getTimeParams = (allSeconds: number): ITimeParams => ({
  seconds: Math.floor(allSeconds % ETimeMeasure.SECONDS_IN_MINUTE),
  minutes: Math.floor(allSeconds / ETimeMeasure.SECONDS_IN_MINUTE % ETimeMeasure.SECONDS_IN_MINUTE),
  hours: Math.floor(allSeconds / ETimeMeasure.SECONDS_IN_HOUR),
});

export default getTimeParams;
