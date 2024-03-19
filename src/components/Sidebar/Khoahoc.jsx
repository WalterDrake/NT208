import React from "react";
import { LiaSchoolSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import config from "../../config/page";

const Khoahoc = () => {
  return (
    <div className="mb-6 rounded hover:shadow hover:bg-[#F0F7FF] py-2">
      <LiaSchoolSolid className="inline-block w-6 h-6 mr-2 -mt-2"></LiaSchoolSolid>
      Khóa học
    </div>
  );
};

export default Khoahoc;
