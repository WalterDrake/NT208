import React from "react";
import KhoahocItem from "./Khoahoc/KhoahocItem";

const khoahoc=[   // tạo mảng lưu dữ liệu của các lơp học
  {giaovien:"Thay Thanh1",ten:"React",siso:20},
  {giaovien:"Thay Thanh2",ten:"React",siso:20},
  {giaovien:"Thay Thanh3",ten:"React",siso:20},
  {giaovien:"Thay Thanh4",ten:"React",siso:20},
  {giaovien:"thầy thắng",ten:"React-wed",siso:100},
  ]

const Khoahocpage = () => {     // component khóa học page
  return (
    <div>
      <div className="relative ml-[200px] flex">  {/* container */}
        {
            khoahoc.map((khoahoc,index) =>
            {
              return (
              <KhoahocItem 
                key = {index} KhoaHoc = {khoahoc}
               
                 />);
            })}
      </div>
    </div>
  );
};

export default Khoahocpage;
