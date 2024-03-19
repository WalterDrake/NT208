import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const Menuitem = ({ title, to, icon }) => {
  return (
    <NavLink className="flex" to={to}>
      {icon}
      <span>{title}</span>
    </NavLink>
  );
};
Menuitem.proTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};
export default Menuitem;
