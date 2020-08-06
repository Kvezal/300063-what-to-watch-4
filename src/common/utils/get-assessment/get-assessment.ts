enum EAssessment {
  AWESOME = `Awesome`,
  BAD = `Bad`,
  NORMAL = `Normal`,
  GOOD = `Good`,
  VERY_GOOD = `Very good`,
}

const getAssessment = (rating: number): string => {
  let assessment = EAssessment.AWESOME;
  if (rating < 3) {
    assessment = EAssessment.BAD;
  } else if (rating < 5) {
    assessment = EAssessment.NORMAL;
  } else if (rating < 8) {
    assessment = EAssessment.GOOD;
  } else if (rating < 10) {
    assessment = EAssessment.VERY_GOOD;
  }
  return assessment;
};

export default getAssessment;
