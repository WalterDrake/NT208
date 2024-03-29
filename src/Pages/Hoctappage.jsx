import React, { useState } from "react";
import HoctapItem from "./Hoctap/HocTapItem";
import { Link, Route } from "react-router-dom";

const HocTap = [
  { giaovien: "Thay Thanh1", ten: "React", siso: 20, tinhtrang: 1,image: "" },
  { giaovien: "Thay Thanh2", ten: "React", siso: 20, tinhtrang: 1,image: "" },
  { giaovien: "Thay Thanh3", ten: "React", siso: 20, tinhtrang: 0 ,image: "" },
  { giaovien: "Thay Thanh4", ten: "React", siso: 20, tinhtrang: 0 ,image: "" },
  { giaovien: "thầy thắng", ten: "React-wed", siso: 100, tinhtrang: 1 ,image: "" },
];

const Hoctappage = () => {
  const [filter, setFilter] = useState(2); // Default filter: all (2)  sài hook nha ae

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <div className="relative ml-[200px]">
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
        <div className="flex">
          {HocTap
            .filter((item) => filter === 2 || item.tinhtrang === filter)
            .map((HocTap, index) => (
              <div key={index}>
                < HoctapItem HocTap= {HocTap} Tinhtrang={filter} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hoctappage;
