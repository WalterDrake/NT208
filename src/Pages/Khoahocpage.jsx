import React, { useState } from "react";
import KhoahocItem from "./Khoahoc/KhoahocItem";
import { Link, Route } from "react-router-dom";

const khoahoc = [
  { giaovien: "Thay Thanh1", ten: "React", siso: 20, tinhtrang: 1,image: "" },
  { giaovien: "Thay Thanh2", ten: "React", siso: 20, tinhtrang: 1,image: "" },
  { giaovien: "Thay Thanh3", ten: "React", siso: 20, tinhtrang: 0 ,image: "" },
  { giaovien: "Thay Thanh4", ten: "React", siso: 20, tinhtrang: 0 ,image: "" },
  { giaovien: "thầy thắng", ten: "React-wed", siso: 100, tinhtrang: 1 ,image: "" },
];

const Khoahocpage = () => {
  const [filter, setFilter] = useState(2); // Default filter: all (2)

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
          {khoahoc
            .filter((item) => filter === 2 || item.tinhtrang === filter)
            .map((khoahoc, index) => (
              <div key={index}>
                <KhoahocItem KhoaHoc={khoahoc} Tinhtrang={filter} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Khoahocpage;
