import {connect} from "react-redux";

import {withFormState, withLoading} from "@common/hocs";
import AddReview from "@pages/add-review/add-review";
import {changeCommentStatus} from "@store/data/action-creator";
import {CommentStatus} from "@store/data/const";
import {postReview} from "@store/data/operation";
import {getCurrentFilm, getCommentStatus} from "@store/data/selectors";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";


const AddReviewWrapper = withLoading(withFormState(AddReview));

const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  authorizationStatus: getAuthorizationStatus(state),
  film: getCurrentFilm(state, props),
  formDisabled: getCommentStatus(state) === CommentStatus.POSTING,
});

const mapDispatchToProps = (dispatch, props) => ({
  onSubmitForm: (commentData) => {
    dispatch(changeCommentStatus(CommentStatus.POSTING));
    dispatch(postReview(commentData, props));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewWrapper);
