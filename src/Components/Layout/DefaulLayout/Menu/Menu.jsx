import { prototype } from "postcss/lib/previous-map";
import React from "react";
import PropTypes from "prop-types";

const Menu = ({ children }) => {
  return <nav>{children}</nav>;
};
Menu.prototype = {
  children: PropTypes.node.isRequired,
};
export default Menu;
