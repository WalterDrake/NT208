import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const KhoahocItem = ({ KhoaHoc, Tinhtrang }) => {
  // tạo props với object
  //console.log(Tinhtrang) để debug
  if (Tinhtrang == 2 || Tinhtrang == KhoaHoc.tinhtrang) {
    return (
      // các thuộc tính nào khác nhau ở từng item muốn render thì qua bên mảng kia thêm nha
      <div className=" ml-4 frame rounded-md bg-white ">
        <img
          src={KhoaHoc.image}
          className="mt-4 ml-2 rounded-md frame"
          style={{ height: "166.27px", width: "175.53px" }}
          alt="Ảnh"
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
    );
  }
};
// tạo component KhoahocItem với props ten, giaovien, siso và trả về 1 div chứa title, giáo viên và sĩ số
export default KhoahocItem;
