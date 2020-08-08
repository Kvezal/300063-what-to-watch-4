import {IFilm} from "@common/types";
import {IReviewCommentParams} from "@store/data/interface";


export interface IAddReviewProps {
  avatar: string;
  authorizationStatus: string;
  film: IFilm;
  formState: IReviewCommentParams;
  formDisabled: boolean;
  onSubmitForm: (formState: IReviewCommentParams) => void;
  onControlChange: (fieldName: string, value: string) => void;
  onDisabledChange: (isDisabled: boolean) => void;
}
