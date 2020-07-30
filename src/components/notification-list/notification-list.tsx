import * as React from "react";

import {INotificationList} from "./interface";


const NotificationList: React.FC<INotificationList> = (props: INotificationList) => {
  const {list, onCloseNotification, maxItems} = props;
  const displayedNotifications = list.slice(0, maxItems);
  return <ul className="notification-list">
    {displayedNotifications.map((item) => {
      const {title, text, type, id} = item;
      return <li key={id} className={`notification-list__item notification-list__item--${type}`}>
        <button
          onClick={() => onCloseNotification(id)}
          className="notification-list__button"
        >
          Close notification
        </button>
        <h3 className="notification-list__title">{title}</h3>
        <p className="notification-list__text">{`${text}`}</p>
      </li>;
    })}
  </ul>;
};

NotificationList.defaultProps = {
  maxItems: 5,
};

export default NotificationList;
