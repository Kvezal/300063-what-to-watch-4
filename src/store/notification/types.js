import PropTypes from "prop-types";

import {HTTPMethod, NotificationType} from "@store/notification/const";


const TNotification = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(
      Object.values(NotificationType)
  ).isRequired,
  name: PropTypes.string.isRequired,
  method: PropTypes.oneOf(
      Object.values(HTTPMethod)
  ).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export {
  TNotification,
};
