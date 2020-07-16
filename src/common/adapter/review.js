import {getDate} from "@common/utils";


const adaptReview = (review) => ({
  ratingScore: review.rating,
  text: review.comment,
  date: getDate(review.date),
  author: review.user.name,
});

export default adaptReview;