export enum ETimePattern {
  HOURS_MINUTES_SECONDS = `hh:mm:ss`,
  HOURS_MINUTES = `h mm`,
}

export enum ETimeMeasure {
  SECONDS_IN_MINUTE = 60,
  SECONDS_IN_HOUR = 3600,
}

export interface ITimeParams {
  seconds: number;
  minutes: number;
  hours: number;
}
