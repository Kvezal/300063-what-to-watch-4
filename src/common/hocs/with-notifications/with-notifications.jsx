import React, {Fragment, PureComponent} from "react";
import NotificationList from "@containers/notification-list";

const withNotifications = (Component) => {
  return class WithNotifications extends PureComponent {
    render() {
      return <Fragment>
        <Component {...this.props}/>
        <NotificationList/>
      </Fragment>;
    }
  };
};

export default withNotifications;
