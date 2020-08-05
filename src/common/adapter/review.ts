import {IReview, IServerReview} from "@common/types";
import {getDate} from "@common/utils";


const adaptReview = (review: IServerReview): IReview => ({
  id: review.id,
  ratingScore: review.rating,
  text: review.comment,
  date: getDate(review.date),
  author: review.user.name,
});

export default adaptReview;
