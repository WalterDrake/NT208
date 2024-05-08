import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const KhoahocItem = ({ KhoaHoc, className }) => {
  if (!KhoaHoc) return null;
  return (
    <Link to={`/Khoahocpage/${KhoaHoc._id}`}>
      <div className= {`md:ml-4 frame rounded-md bg-white wrap ${className}`}>
        <img
          src={KhoaHoc.linkimage}
          className="mt-4 ml-2 rounded-md frame"
          style={{ height: "166.27px", width: "175.53px" }}
          alt={KhoaHoc.title}
        />
        {/* muốn thêm ảnh thì thêm src trong cái mảng*/}
        <div className="ml-2.5 mt-1">
          {/* content của môn học*/}
          <h1 className="font-bold text-xs mb-2 ">{KhoaHoc.title}</h1>
          <h1 className="font-thin text-xs mb-2">{KhoaHoc.description}</h1>
          <p className="font-bold text-red-600 ">
            <span className="text-black">
              <FontAwesomeIcon icon={faUser} />
            </span> {KhoaHoc.memberof}
          </p>
        </div>
      </div>
    </Link>
  );
}
export default KhoahocItem
