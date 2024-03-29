import React from "react";

const HoctapItem = ({HocTap,Tinhtrang}) => { // tạo props với object
  //console.log(Tinhtrang) để debug
  if (Tinhtrang == 2 || Tinhtrang ==Hoctap.tinhtrang) // cái này hơi dư nếu nhma nếu anh em hiểu thì xóa nha
  {
    return (
      // các thuộc tính nào khác nhau ở từng item muốn render thì qua bên mảng kia thêm nha
      <div className="border-2 ml-[100px] wrap">
        <h1>title className: {HocTap.ten}</h1>
        <img src={HocTap.image}/> {/* muốn thêm ảnh thì thêm src trong cái mảng*/}
          <div>  {/* content của môn học*/}
          <p>GVTH: {HocTap.giaovien}</p>
          <p>Sĩ số: {HocTap.siso}</p>
          </div>  
      </div>
    );
  }
};
// tạo componentHoctapItem với props ten, giaovien, siso và trả về 1 div chứa title, giáo viên và sĩ số
export default HoctapItem;
