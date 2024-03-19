import React from "react";
import Menu from "../Menu/Menu";
import Menuitem from "../Menu/Menuitem";
import config from "../../../../../src/config/routes";
import Icon from "../../../icon/icon";
import DienDanIcon from "../../../icon/icon";
const Sidebar = () => {
  return (
    <div className="ml-[5px] mt-[12px] h-[636px] w-[270px] rounded-3xl bg-white shadow-md">
      <Menu>
        <Menuitem title="Dien Dan" to={config.diendan} icon={<DienDanIcon />} />
      </Menu>
    </div>
  );
};

export default Sidebar;
