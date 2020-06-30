import PropTypes from "prop-types";

import filmType from "./film";


const filmListType = PropTypes.arrayOf(
    PropTypes.shape(filmType)
);

export default filmListType;
