import * as React from "react";

import NotificationList from "@containers/notification-list";


const withNotifications = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;

  return class WithNotifications extends React.PureComponent<TComponent> {
    render() {
      return <React.Fragment>
        <Component {...this.props}/>
        <NotificationList/>
      </React.Fragment>;
    }
  };
};

export default withNotifications;
