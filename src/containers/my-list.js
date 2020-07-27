import {connect} from "react-redux";

import {withLoading} from "@common/hocs";
import MyList from "@pages/my-list/my-list";
import {getFavoriteFilms} from "@store/data/selectors";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";


const MyListWrapper = withLoading(MyList);

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  films: getFavoriteFilms(state),
  avatar: getAvatar(state),
});

export default connect(mapStateToProps)(MyListWrapper);
