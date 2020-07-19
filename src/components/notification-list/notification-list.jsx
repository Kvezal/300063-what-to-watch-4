import React from "react";
import PropTypes from "prop-types";


const NotificationList = (props) => {
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

NotificationList.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        httpCode: PropTypes.number,
      })
  ).isRequired,
  onCloseNotification: PropTypes.func.isRequired,
  maxItems: PropTypes.number.isRequired,
};

export default NotificationList;
