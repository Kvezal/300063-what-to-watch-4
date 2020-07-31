export enum TimeMeasure {
  SECONDS_IN_MINUTE = 60,
  SECONDS_IN_HOUR = 3600,
}

export interface ITimeParams {
  seconds: number;
  minutes: number;
  hours: number;
}
