import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

const HocNhomItem = ({ HocNhom }) => { // tạo props với object
    return (
      <Link to = {`/Hocnhompage/${HocNhom.id}`}>
      <div className=" ml-4  frame rounded-md bg-white wrap">

        <img src={HocNhom.image}
          className="mt-4 ml-2 rounded-md frame"
          style={{ height: "166.27px", width: "175.53px" }}
          alt="Ảnh"
        /> {/* muốn thêm ảnh thì thêm src trong cái mảng*/}
        <div className="ml-2.5 mt-1">
          <h1 className="font-bold text-xs mt-4 mb-4 "> {HocNhom.ten}</h1> {/* content của môn học*/}
          <p className="font-bold text-red-600 "> <span className="text-black"><FontAwesomeIcon icon={faUser} />
          </span> {HocNhom.siso}</p>
        </div>
      </div>
      </Link>
    )
}
// tạo componentHocNhomItem với props ten, giaovien, siso và trả về 1 div chứa title, giáo viên và sĩ số
export default HocNhomItem;
