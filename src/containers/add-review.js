import {connect} from "react-redux";

import withLoading from "@common/hocs/with-loading/with-loading";
import AddReview from "@pages/add-review/add-review";
import {getAuthorizedFlag, getAvatar} from "@store/user/selector";
import {getCurrentFilm} from "@store/data/selectors";
import {postReview} from "@store/data/operation";


const AddReviewWrapper = withLoading(AddReview, [`film`]);

const mapStateToProps = (state, props) => ({
  avatar: getAvatar(state),
  isAuthorized: getAuthorizedFlag(state),
  film: getCurrentFilm(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  onSubmitForm: (commentData) => {
    dispatch(postReview({
      rating: commentData.rating,
      comment: commentData.comment,
    }, props));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewWrapper);
