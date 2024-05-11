import React, { useEffect, useContext, useState } from "react";

import { CurrentVideoContext } from "../../Pages/Khoahoc/KhoahocItemDetail/KhoaHocDetailItem";
import * as videos from "../../service/videos";
import useUser from "../../hook/useUser";

export default function ListPost({ item }) {
  const { user } = useUser();
  const { setCurPosturl } = useContext(CurrentPostContext);
  const [listPosts, setListPosts] = useState([]);
  useEffect(() => {
    videos
      .getPostOfItem(item._id)
      .then((res) => {
        if (res) setListPosts(res);
      })
      .catch((err) => {
        console.log("err get posts list", err);
      });
  }, [listPosts]);
  const handleDeletePost = (id) => {
    videos
      .deletePost(id)
      .then((res) => {
        console.log("res delete post", res);
      })
      .catch((err) => {
        console.log("err delete post", err);
      });
  };
  return (
    <ul className="bg-red-500 w-full rounded-xl ">
      {listPosts.map((post, index) => {
        return (
          <li
            key={index}
            className="mt-0 round-xl border-[1px] border-b-black "
          >
            <div
              onClick={() => {
                setCurPosturl(post.link);
              }}
            >
              <h5> Title: {post.title}</h5>
              <p className="text-sm font-thin">
                {" "}
                Description: {post.description}
              </p>
            </div>
            {(user.role === "teacher" || user.role === "admin") && (
              <button
                className="ml-[30%] bg-red-300 rounded-xl hover:bg-red-400"
                onClick={() => handleDeletePost(post._id)}
              >
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
