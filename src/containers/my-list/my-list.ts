import {connect} from "react-redux";

import {withLoading} from "@hocs/index";
import MyList from "@pages/my-list/my-list";
import {getFavoriteFilms} from "@store/data/selectors";
import {getAuthorizationStatus, getAvatar} from "@store/user/selector";
import {TStoreState} from "@store/interface";

import {IMyListMapStateToProps} from "./interface";


const MyListWrapper = withLoading(MyList);

const mapStateToProps = (state: TStoreState): IMyListMapStateToProps => ({
  authorizationStatus: getAuthorizationStatus(state),
  films: getFavoriteFilms(state),
  avatar: getAvatar(state),
});

export default connect<IMyListMapStateToProps>(mapStateToProps)(MyListWrapper);
