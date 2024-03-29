import React from "react";

const HocNhomItem = ({HocNhom,Tinhtrang}) => { // tạo props với object
  //console.log(Tinhtrang) để debug
  if (Tinhtrang == 2 || Tinhtrang ==HocNhom.tinhtrang) // cái này hơi dư nếu nhma nếu anh em hiểu thì xóa nha
  {
    return (
      // các thuộc tính nào khác nhau ở từng item muốn render thì qua bên mảng kia thêm nha
      <div className="border-2 ml-[100px] wrap">
        <h1>title className: {HocNhom.ten}</h1>
        <img src={HocNhom.image}/> {/* muốn thêm ảnh thì thêm src trong cái mảng*/}
          <div>  {/* content của môn học*/}
          <p>GVTH: {HocNhom.giaovien}</p>
          <p>Sĩ số: {HocNhom.siso}</p>
          </div>  
      </div>
    );
  }
};
// tạo componentHocNhomItem với props ten, giaovien, siso và trả về 1 div chứa title, giáo viên và sĩ số
export default HocNhomItem;
