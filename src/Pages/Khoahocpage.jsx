import React from "react";
import KhoahocItem from "./Khoahoc/KhoahocItem";
const khoahoc=[
  {giaovien:"Thay Thanh1",ten:"React",siso:20},
  {giaovien:"Thay Thanh2",ten:"React",siso:20},
  {giaovien:"Thay Thanh3",ten:"React",siso:20},
  {giaovien:"Thay Thanh4",ten:"React",siso:20},
  ]

const Khoahocpage = () => {    
  return (
    <div>
      <div className="relative ml-[200px] flex">
        {
            khoahoc.map((khoahoc,index)=>
            {
              return (
              <KhoahocItem 
                key = {index}
                KhoaHoc = {khoahoc}
                 />);
            })}
      </div>
    </div>
  );
};

export default Khoahocpage;
