import * as React from "react";

import NotificationList from "@containers/notification-list/notification-list";


const withNotifications = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;

  const WithNotifications: React.FC<TComponent> = (props: TComponent) => {
    return <React.Fragment>
      <Component {...props}/>
      <NotificationList/>
    </React.Fragment>;
  };

  return WithNotifications;
};

export default withNotifications;
