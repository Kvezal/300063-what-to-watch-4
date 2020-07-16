import {connect} from "react-redux";

import NotificationList from "@components/notification-list/notification-list";
import {ActionCreator as DataActionCreator} from "@store/data/data";
import {getNotifications} from "@store/data/selectors";


const mapStateToProps = (state) => ({
  list: getNotifications(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCloseNotification: (notificationId) => {
    dispatch(DataActionCreator.removeNotification(notificationId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);
