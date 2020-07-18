import {connect} from "react-redux";

import AddReview from "@pages/add-review/add-review";
import {getAuthorizedFlag} from "@store/user/selector";
import {getFilmById} from "@store/data/selectors";


const mapStateToProps = (state) => ({
  avatar: `avatar`,
  isAuthorized: getAuthorizedFlag(state),
  film: getFilmById(state),
});

export default connect(mapStateToProps)(AddReview);
