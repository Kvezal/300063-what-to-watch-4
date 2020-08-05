import {IFilm} from "@common/types";


export interface IAddReviewFormState {
  rating: string;
  comment: string;
}

export interface IAddReviewProps {
  avatar: string;
  authorizationStatus: string;
  film: IFilm;
  formState: IAddReviewFormState;
  formDisabled: boolean;
  onSubmitForm: (formState: IAddReviewFormState) => void;
  onControlChange: (fieldName: string, value: string) => void;
  onDisabledChange: (isDisabled: boolean) => void;
}
