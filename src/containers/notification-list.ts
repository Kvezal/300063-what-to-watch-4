import {connect} from "react-redux";

import NotificationList from "@components/notification-list/notification-list";
import {removeNotification} from "@store/notification/action-creator";
import {getDisplayedNotifications} from "@store/notification/selectors";


const mapStateToProps = (state) => ({
  notifications: getDisplayedNotifications(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCloseNotification: (notificationId) => {
    dispatch(removeNotification(notificationId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);
