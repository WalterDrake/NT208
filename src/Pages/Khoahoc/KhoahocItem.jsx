import React from "react";

const KhoahocItem = ({KhoaHoc,Tinhtrang}) => { // tạo props với object
  //console.log(Tinhtrang) để debug
  if (Tinhtrang == 2 || Tinhtrang == KhoaHoc.tinhtrang)
  {
    return (
      <div className="border-2 ml-[100px] wrap">
        <h1>title className: {KhoaHoc.ten}</h1>
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
