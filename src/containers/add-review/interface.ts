import {IFilm} from "@common/types";
import {EAuthorizationStatus} from "@store/user/interface";
import {IReviewCommentParams} from "@store/data/interface";

export interface IAddReviewMapStateProps {
  avatar: string;
  authorizationStatus: EAuthorizationStatus;
  film: IFilm;
  formDisabled: boolean;
}

export interface IAddReviewMapDispatchToProps {
  onSubmitForm: (commentData: IReviewCommentParams) => void;
}
