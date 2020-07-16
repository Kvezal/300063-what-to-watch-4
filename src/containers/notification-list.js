import {connect} from "react-redux";

import NotificationList from "@components/notification-list/notification-list";
import {removeNotification} from "@store/data/action-creator";
import {getNotifications} from "@store/data/selectors";


const mapStateToProps = (state) => ({
  list: getNotifications(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCloseNotification: (notificationId) => {
    dispatch(removeNotification(notificationId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);
