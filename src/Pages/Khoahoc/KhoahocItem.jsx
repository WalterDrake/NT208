import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const KhoahocItem = ({ KhoaHoc }) => {
  return (
    <Link to={`/Khoahocpage/${KhoaHoc.id}`}>
      <div className=" ml-4 frame rounded-md bg-white wrap">
        <img
          src={KhoaHoc.image}
          className="mt-4 ml-2 rounded-md frame"
          style={{ height: "166.27px", width: "175.53px" }}
          alt={KhoaHoc.ten}
        />
        {/* muốn thêm ảnh thì thêm src trong cái mảng*/}
        <div className="ml-2.5 mt-1">
          {/* content của môn học*/}
          <h1 className="font-bold text-xs mb-2 ">{KhoaHoc.ten}</h1>
          <h1 className="font-thin text-xs mb-2">{KhoaHoc.mota}</h1>
          <p className="font-bold text-red-600 ">
            <span className="text-black">
              <FontAwesomeIcon icon={faUser} />
            </span> {KhoaHoc.siso}
          </p>
        </div>
      </div>
    </Link>
  );
}
export default KhoahocItem
