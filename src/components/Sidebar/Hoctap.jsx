import React from "react";
import { TbSchool } from "react-icons/tb";
import { Link } from "react-router-dom";
import config from "../../config/page";
const Hoctap = () => {
  return (
    <div className="mb-6 rounded hover:shadow hover:bg-[#F0F7FF] py-2">
      <TbSchool className="inline-block w-6 h-6 mr-2 -mt-2"></TbSchool>
      Học tập
    </div>
  );
};

export default Hoctap;
