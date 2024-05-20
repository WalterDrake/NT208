import React, { useEffect, useContext, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


import * as posts from "../../service/posts"
import useUser from "../../hook/useUser";
import { Tooltip } from "@mui/material";

export default function ListPost({ item }) {
  const { user } = useUser();
  const [listPosts, setListPosts] = useState([]);
  useEffect(() => {
    const postInterval = setInterval(() => { 
      posts.getListPostofItem(item._id)
        .then((res) => {
          setListPosts(res);
        })
        .catch((err) => {
          console.log("err get list post", err);
        });
    }, 10000);
    return () => clearInterval(postInterval);
  }, [listPosts,item]);
  const handleDeletePost = (id) => {
    posts
      .DeletePost(id)
      .then((res) => {
        alert("delete post", res);
      })
      .catch((err) => {
        alert("err delete post", err);
      });
  };
  return (
    <ul className="bg-gradient-to-r from-[#758EB7] to-[#A5CAD2] w-full rounded-xl ">
      {listPosts.map((post, index) => {
        return (
          <li
            key={index}
            className="mt-0 round-xl border-[1px] border-b-black "
          >
              <h5> Title: {post.title}</h5>
              <p className="text-sm font-thin">
                {" "}
                Description: {post.description}
              </p>
            {(user.role === "teacher" || user.role === "admin") && (
              <button
                className="ml-[30%] bg-red-300 rounded-xl hover:bg-red-400"
                onClick={() => handleDeletePost(post._id)}
              >
                <Tooltip title="Delete Post">
                  <DeleteIcon />
                </Tooltip>
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
