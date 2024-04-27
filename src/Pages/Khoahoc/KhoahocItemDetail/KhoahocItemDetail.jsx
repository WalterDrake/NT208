<<<<<<< HEAD:src/Pages/Khoahoc/KhoahocItemDetail.jsx
// CourseDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import VideoList from './KhoahocListVideo.jsx';
import VideoPlayer from './KhoahocVideo.jsx';

=======
import { useParams } from "react-router-dom";
import { useEffect, useState ,createContext} from "react";
import axios from "axios";
import { Grid } from "@mui/material";
>>>>>>> e3772e152022d11738f754e571bbe2c982566f8b:src/Pages/Khoahoc/KhoahocItemDetail/KhoahocItemDetail.jsx

import KhoahocDetailVideo from "./KhoahocDetailItem/KhoahocDetailVideo";
import KhoahocDetailList from "./KhoahocDetailItem/KhoahocDetailList";

export const CurrentVideoContext = createContext();
function CourseDetails() {
 const { courseName } = useParams();
 const [courseDetails, setCourseDetails] = useState({
    name: 'hocReact',
    description: 'hoc react tren web',
<<<<<<< HEAD:src/Pages/Khoahoc/KhoahocItemDetail.jsx
    videoList: [
      {
        id: 1,
        title: ' Bài 1:hoc react',
        url: 'https://www.youtube.com/watch?v=CVaEWBFpxhc',
        description: 'hoc react',
      },
      {
        id: 2,
        title: ' Bài 2:hoc vuejs',
        url: 'https://www.youtube.com/watch?v=x7l0JX68XyA&list=PL_-VfJajZj0U9nEXa4qyfB4U5ZIYCMPlz&index=44',
        description: 'hoc vuejs',
      },
    ],
 });
 const [curVideo, setCurVideo] = useState(courseDetails.videoList[0].url);

 return (
    <div>
      <div className="bg-[#29303b] w-full" id="navbar-course">
        <h1 className="h-[50px] text-[#fff] text-[1.2rem] items-center bg-[#29303b] flex relative ">{courseDetails.name}</h1>
      </div>
      <VideoList videoList={courseDetails.videoList} setCurVideo={setCurVideo} />
      <VideoPlayer curVideo={curVideo} />
    </div>
 );
=======
    videoList: [{
      id: 1,
      title: ' Bài 1:hoc react',
      url: 'https://www.youtube.com/embed/TLVK0iTDev0?si=8Ld1xnfpQxnNBvBO',
      description: 'hoc react'
    },
    {
      id: 2,
      title: ' Bài 2:hoc vuejs',
      url: 'https://www.youtube.com/embed/9vaLkYElidg?si=Imdocb1vyUPRH_UU',
      description: 'hoc vuejs'
    }
    ]
  });
  const [curVideo,setCurVideo] = useState(courseDetails.videoList[0].url)

  // useEffect(() => {
  //   // Thay đổi URL này theo API của bạn
  //   const apiUrl = `https://my-api.com/courses/${courseName}`;

  //   axios.get(apiUrl)
  //     .then(response => {
  //       setCourseDetails(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Could not fetch course details:", error);
  //     });
  // }, [courseName]);  // Chạy lại useEffect mỗi khi courseName thay đổi

  // if (!courseDetails) {
  //   return <div>Loading course details...</div>;
  // }

  return (
    <CurrentVideoContext.Provider value={{curVideo,setCurVideo,courseDetails, setCourseDetails}}>
      <div className="bg-[#29303b] w-full" id="navbar-course">
        <h1 className="h-[50px] text-[#fff] text-[1.2rem] items-center bg-[#29303b] flex relative ">{courseDetails.name}</h1>
      </div>
      <Grid item xs={12}>
      <KhoahocDetailList/>
      </Grid>
      <div id="video-khoa-hoc">
        <KhoahocDetailVideo  />
      </div>
    </CurrentVideoContext.Provider>
  );
>>>>>>> e3772e152022d11738f754e571bbe2c982566f8b:src/Pages/Khoahoc/KhoahocItemDetail/KhoahocItemDetail.jsx
}

export default CourseDetails;
