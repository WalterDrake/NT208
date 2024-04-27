// CourseDetails.js
import { useParams } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

import KhoahocDetailVideo from "./KhoahocDetailItem/KhoahocDetailVideo";
import KhoahocDetailList from "./KhoahocDetailItem/KhoahocDetailList";
import Comment from "./KhoahocDetailItem/KhoahocDetailComment.jsx";
import CommentList from "./KhoahocDetailItem/KhoahocDetailCommentList.jsx";

export const CurrentVideoContext = createContext();

function CourseDetails() {
  const { courseName } = useParams();
  const [courseDetails, setCourseDetails] = useState({
    name: "hocReact",
    description: "hoc react tren web",
    videoList: [
      {
        id: 1,
        title: " Bài 1:hoc react",
        url: "https://www.youtube.com/embed/TLVK0iTDev0?si=8Ld1xnfpQxnNBvBO",
        description: "hoc react",
      },
      {
        id: 2,
        title: " Bài 2:hoc vuejs",
        url: "https://www.youtube.com/embed/9vaLkYElidg?si=Imdocb1vyUPRH_UU",
        description: "hoc vuejs",
      },
    ],
  });
  const [curVideo, setCurVideo] = useState(courseDetails.videoList[0].url);

  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <CurrentVideoContext.Provider
      value={{ curVideo, setCurVideo, courseDetails, setCourseDetails }}
    >
      <div className="bg-[#29303b] w-full" id="navbar-course">
        <h1 className="h-[50px] text-[#fff] text-[1.2rem] items-center bg-[#29303b] flex relative ">
          {courseDetails.name}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mt-4">
          <KhoahocDetailList />
        </div>
        <div className="w-full md:w-1/2 mt-4">
          <div id="video-khoa-hoc" className="">
            <KhoahocDetailVideo />
          </div>
          <div >
            <Comment onAddComment={addComment} />
            <CommentList comments={comments} />
          </div>
        </div>
        
      </div>
    </CurrentVideoContext.Provider>
  );
}

export default CourseDetails;
