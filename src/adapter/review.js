import getDate from "@utils/get-date";


const adaptReview = (review) => ({
  ratingScore: review.ratingScore,
  text: review.comment,
  date: getDate(review.date),
  author: review.user.name,
});

export default adaptReview;
