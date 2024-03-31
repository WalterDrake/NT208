import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const HoctapItem = ({ HocTap, Tinhtrang }) => { // tạo props với object
  //console.log(Tinhtrang) để debug
  if (Tinhtrang == 2 || Tinhtrang == Hoctap.tinhtrang) // cái này hơi dư nếu nhma nếu anh em hiểu thì xóa nha
  {
    return (
      // các thuộc tính nào khác nhau ở từng item muốn render thì qua bên mảng kia thêm nha
      <div className=" ml-4 frame rounded-md bg-white wrap">

        <img src={HocTap.image}
          className="mt-4 ml-2 rounded-md frame"
          style={{ height: "166.27px", width: "175.53px" }}
          alt="Ảnh"
        /> {/* muốn thêm ảnh thì thêm src trong cái mảng*/}
        <div className="ml-2.5 mt-1">
          <h1 className="font-bold text-xs mb-2">{HocTap.ten}</h1>{/* content của môn học*/}
          <p className="font-thin text-xs mb-1">GVLT: {HocTap.giaovien}</p>
          <p className="font-thin text-xs mb-1">GVTH: {HocTap.giaovienTH}</p>
          <p className="font-bold text-red-600"><span className="text-black">
            <FontAwesomeIcon icon={faUser} />
          </span> {HocTap.siso}</p>
        </div>
      </div>
    );
  }
};
// tạo componentHoctapItem với props ten, giaovien, siso và trả về 1 div chứa title, giáo viên và sĩ số
export default HoctapItem;
