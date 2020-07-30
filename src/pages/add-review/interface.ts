import {FilmInterface} from "@common/types";

interface IAddReviewFormState {
  rating: string;
  comment: string;
}

interface IAddReviewProps {
  avatar: string;
  authorizationStatus: string;
  film: FilmInterface;
  formState: IAddReviewFormState;
  formDisabled: boolean;
  onSubmitForm: (formState: IAddReviewFormState) => void;
  onControlChange: (fieldName: string, value: string) => void;
  onDisabledChange: (isDisabled: boolean) => void;
}

export {
  IAddReviewFormState,
  IAddReviewProps,
};
