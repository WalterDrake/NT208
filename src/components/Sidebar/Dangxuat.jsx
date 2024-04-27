import React from "react";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import config from "../../config/page";
const Dangxuat = () => {
  return (
    <div className="mt-9 text-[#ff3e3e] font-bold w-[145px] mb-6 rounded hover:shadow hover:bg-[#F0F7FF] py-2">
      <LuLogOut className="inline-block w-6 h-6 mr-2 -mt-2"></LuLogOut>
      Đăng xuất
    </div>
  );
};

export default Dangxuat;
