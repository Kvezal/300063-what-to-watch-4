const getAssessment = (rating: number): string => {
  let assessment = `Awesome`;
  if (rating < 3) {
    assessment = `Bad`;
  } else if (rating < 5) {
    assessment = `Normal`;
  } else if (rating < 8) {
    assessment = `Good`;
  } else if (rating < 10) {
    assessment = `Very good`;
  }
  return assessment;
};

export default getAssessment;
