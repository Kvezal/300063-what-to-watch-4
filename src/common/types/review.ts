export interface IReview {
  id: number;
  ratingScore: number;
  text: string;
  author: string;
  date: string;
}

export interface IServerReview {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}
