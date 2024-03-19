import React from "react";
import IconDienDan from "./IconDienDan";
import Search from "./Search";
import BaiDangMoi from "./BaiDangMoi";

const HeaderSearch = () => {
  return (
    <div className="ml-[10px] mt-[10px] flex h-[77px] w-[1250px] rounded-3xl bg-white">
      <IconDienDan />
      <Search />
      <BaiDangMoi />
    </div>
  );
};

export default HeaderSearch;
