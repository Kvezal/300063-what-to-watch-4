import padStart from "@utils/pad-start";


const TimeMeasure = {
  SECONDS_IN_MINUTE: 60,
  SECONDS_IN_HOUR: 3600,
};

const getTwoNumber = (number) => {
  const roundedNumber = Math.floor(number);
  return padStart(2, `${roundedNumber}`, 0);
};

const getTime = (allSeconds) => {
  const seconds = getTwoNumber(allSeconds % TimeMeasure.SECONDS_IN_MINUTE);
  const minutes = getTwoNumber(allSeconds / TimeMeasure.SECONDS_IN_MINUTE % TimeMeasure.SECONDS_IN_MINUTE);
  const hours = getTwoNumber(allSeconds / TimeMeasure.SECONDS_IN_HOUR);
  return `${hours}:${minutes}:${seconds}`;
};

export default getTime;
