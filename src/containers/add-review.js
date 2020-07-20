import {connect} from "react-redux";

import AddReview from "@pages/add-review/add-review";
import {getAuthorizedFlag, getAvatar} from "@store/user/selector";
import {getFilmById} from "@store/data/selectors";
import {postReview} from "@store/data/operation";


const mapStateToProps = (state) => ({
  avatar: getAvatar(state),
  isAuthorized: getAuthorizedFlag(state),
  film: getFilmById(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm: (commentData) => {
    dispatch(postReview({
      rating: commentData.rating,
      comment: commentData.comment,
    }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
