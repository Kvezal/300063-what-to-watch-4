const TimeMeasure = {
  SECONDS_IN_MINUTE: 60,
  SECONDS_IN_HOUR: 3600,
};

const getTimeParams = (allSeconds) => ({
  seconds: Math.floor(allSeconds % TimeMeasure.SECONDS_IN_MINUTE),
  minutes: Math.floor(allSeconds / TimeMeasure.SECONDS_IN_MINUTE % TimeMeasure.SECONDS_IN_MINUTE),
  hours: Math.floor(allSeconds / TimeMeasure.SECONDS_IN_HOUR),
});

export default getTimeParams;
