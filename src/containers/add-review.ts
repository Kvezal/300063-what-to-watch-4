import {connect} from "react-redux";

import {withFormState, withLoading} from "@hocs/index";
import AddReview from "@pages/add-review/add-review";
import {changeCommentStatus} from "@store/data/action-creator";
import {ECommentStatus} from "@store/data/interface";
import {postReview} from "@store/data/operation";
import {getCurrentFilm, getCommentStatus} from "@store/data/selectors";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";


const AddReviewWrapper = withLoading(withFormState(AddReview));

const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  authorizationStatus: getAuthorizationStatus(state),
  film: getCurrentFilm(state, props),
  formDisabled: getCommentStatus(state) === ECommentStatus.POSTING,
});

const mapDispatchToProps = (dispatch, props) => ({
  onSubmitForm: (commentData) => {
    dispatch([
      changeCommentStatus(ECommentStatus.POSTING),
      postReview(commentData, props)
    ]);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewWrapper);
