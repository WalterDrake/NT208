import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbaritem = ({ to, icon }) => {
  return (
    <NavLink className="text-[#0077FF] " to={to}>
      {icon}
    </NavLink>
  );
};

Navbaritem.proTypes = {
  to: PropTypes.string.isRequired,
};
export default Navbaritem;
