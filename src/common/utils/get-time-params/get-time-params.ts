import {ITimeParams, TimeMeasure} from "./interface";


const getTimeParams = (allSeconds: number): ITimeParams => ({
  seconds: Math.floor(allSeconds % TimeMeasure.SECONDS_IN_MINUTE),
  minutes: Math.floor(allSeconds / TimeMeasure.SECONDS_IN_MINUTE % TimeMeasure.SECONDS_IN_MINUTE),
  hours: Math.floor(allSeconds / TimeMeasure.SECONDS_IN_HOUR),
});

export default getTimeParams;
