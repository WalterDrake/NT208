import React, { useState } from "react";
import HocNhomItem from "./Hocnhom/HocNhomItem";
import HocNhom_Setting from "./Hocnhom/HocNhom_Setting";

const HocNhom = [
  { giaovien: "Thay Thanh1", ten: "React", siso: 20, tinhtrang: 1,image: "" },
  { giaovien: "Thay Thanh2", ten: "React", siso: 20, tinhtrang: 1,image: "" },
  { giaovien: "Thay Thanh3", ten: "React", siso: 20, tinhtrang: 0 ,image: "" },
  { giaovien: "Thay Thanh4", ten: "React", siso: 20, tinhtrang: 0 ,image: "" },
  { giaovien: "thầy thắng", ten: "React-wed", siso: 100, tinhtrang: 1 ,image: "" },
];

const HocNhompage = () => {
  const [filter, setFilter] = useState(2); // Default filter: all (2)  sài hook nha ae

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <div className="relative ml-[200px]">
        <div className="flex justify-between">  {/* header của hocnhompage */}
        <ul className="flex">
          <li className="m-2" onClick={() => handleFilterChange(2)}>
            Tất cả
          </li>
          <li className="m-2" onClick={() => handleFilterChange(1)}>
            Đang học
          </li>
          <li className="m-2" onClick={() => handleFilterChange(0)}>
            Đã học
          </li>
        </ul>
        <button className="end-3"><HocNhom_Setting/></button>
 
        </div>
        <div className="flex">
          {HocNhom
            .filter((item) => filter === 2 || item.tinhtrang === filter)
            .map((HocNhom, index) => (
              <div key={index}>
                <HocNhomItem HocNhom= {HocNhom} Tinhtrang={filter} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HocNhompage;
