import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUserPlus } from "@fortawesome/free-solid-svg-icons";

function HocNhomItem() {
  function HandleSettingClick() { }
  return (
    <div>
      <FontAwesomeIcon icon={faGear} />
      <button
        title="Setting"
        className="framebutton"
        onClick={() => HandleSettingClick()}
      >
        <FontAwesomeIcon icon={faUserPlus} /> Tham gia Hoặc tạo nhóm
      </button>
    </div>
  );
}

export default HocNhomItem;
