import PropTypes from "prop-types";


const film = PropTypes.shape({
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}).isRequired;

export default film;
