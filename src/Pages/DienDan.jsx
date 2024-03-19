import { Container } from "postcss";
import React from "react";
import HeaderSearch from "./DienDan/HeaderSearch";
import Post from "./DienDan/Thongtin/Post";
import { Link } from "react-router-dom";
import config from "..//config/routes";

const DienDan = () => {
  return (
    <div className="">
      <HeaderSearch></HeaderSearch>

      <Link to={config.khoahoc}>{<Post />}</Link>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default DienDan;
