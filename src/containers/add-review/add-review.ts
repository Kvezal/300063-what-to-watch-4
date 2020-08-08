import {AxiosInstance} from "axios";
import {connect} from "react-redux";

import {withFormState, withLoading} from "@hocs/index";
import {IDispatch} from "@middlewares/interface";
import {AddReview, IAddReviewProps} from "@pages/add-review";
import {changeCommentStatus} from "@store/data/action-creator";
import {ECommentStatus, IReviewCommentParams} from "@store/data/interface";
import {postReview} from "@store/data/operation";
import {getCommentStatus, getCurrentFilm} from "@store/data/selectors";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";
import {TStoreAction, TStoreState} from "@store/interface";

import {IAddReviewMapDispatchToProps, IAddReviewMapStateProps} from "./interface";


const AddReviewWrapper = withLoading(withFormState(AddReview));

const mapStateToProps = (state: TStoreState, props: IAddReviewProps): IAddReviewMapStateProps => ({
  avatar: getAvatar(state),
  authorizationStatus: getAuthorizationStatus(state),
  film: getCurrentFilm(state, props),
  formDisabled: getCommentStatus(state) === ECommentStatus.POSTING,
});

const mapDispatchToProps = (dispatch: IDispatch<TStoreState, AxiosInstance, TStoreAction>, props: IAddReviewProps): IAddReviewMapDispatchToProps => ({
  onSubmitForm: (commentData: IReviewCommentParams): void => {
    dispatch([
      changeCommentStatus(ECommentStatus.POSTING),
      postReview(commentData, props)
    ]);
  },
});

export default connect<IAddReviewMapStateProps, IAddReviewMapDispatchToProps>(mapStateToProps, mapDispatchToProps)(AddReviewWrapper);
