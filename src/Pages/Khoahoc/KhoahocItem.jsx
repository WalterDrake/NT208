import React from "react";

const KhoahocItem = ({KhoaHoc,Tinhtrang}) => { // tạo props với object
  //console.log(Tinhtrang) để debug
  if (Tinhtrang == 2 || Tinhtrang == KhoaHoc.tinhtrang)
  {
    return (
      // các thuộc tính nào khác nhau ở từng item muốn render thì qua bên mảng kia thêm nha
      <div className="border-2 ml-[100px] wrap">
        <h1>title className: {KhoaHoc.ten}</h1>
        <img src={KhoaHoc.image}/> {/* muốn thêm ảnh thì thêm src trong cái mảng*/}
          <div>  {/* content của môn học*/}
          <p>GVTH: {KhoaHoc.giaovien}</p>
          <p>Sĩ số: {KhoaHoc.siso}</p>
          </div>  
      </div>
    );
  }
};
// tạo component KhoahocItem với props ten, giaovien, siso và trả về 1 div chứa title, giáo viên và sĩ số
export default KhoahocItem;
