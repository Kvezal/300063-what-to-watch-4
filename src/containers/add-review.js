import {connect} from "react-redux";

import withLoading from "@common/hocs/with-loading/with-loading";
import AddReview from "@pages/add-review/add-review";
import {changeCommentStatus} from "@store/data/action-creator";
import {CommentStatus} from "@store/data/const";
import {postReview} from "@store/data/operation";
import {getCurrentFilm, getCommentStatus} from "@store/data/selectors";
import {getAuthorizedFlag, getAvatar} from "@store/user/selector";


const AddReviewWrapper = withLoading(AddReview, [`film`]);

const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  isAuthorized: getAuthorizedFlag(state),
  film: getCurrentFilm(state, props),
  commentStatus: getCommentStatus(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  onSubmitForm: (commentData) => {
    dispatch(changeCommentStatus(CommentStatus.POSTING));
    dispatch(postReview(commentData, props));
  },

  onCommentStatusChange: () => {

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewWrapper);
