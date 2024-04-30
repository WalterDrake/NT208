import { useParams } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { Grid } from "@mui/material";

import KhoahocDetailVideo from "./KhoahocDetailItem/KhoahocDetailVideo";
import KhoahocDetailList from "./KhoahocDetailItem/KhoahocDetailList";
import { useContext } from "react";
import { UserContext } from "../../../App";
import * as courses from '../../../service/courses'
import * as videos  from '../../../service/videos'


export const CurrentVideoContext = createContext();
function CourseDetails() {
  const { courseID } = useParams();
  const [courseDetails, setCourseDetails] = useState({
    id: 1,
    name: 'hocReact',
    description: 'hoc react tren web',
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
  useEffect(() => {
    document.title = courseDetails.name
    courses.getCourse(courseID)
      .then(res => {
        console.log('res', res)
        setCourseDetails(res)
      })
      .catch(err => {
        console.log('err', err)
      })
      videos.getVideos(courseDetails.id)
      .then(res => {
        console.log('res', res) // trả ra danh sach các video
        courseDetails.videoList = res
      })
      .catch(err => {
        console.log('err', err)
      })
    
  } ,[courseID])
  const [curVideo, setCurVideo] = useState(courseDetails?.videoList[0].url)


  return (

    <CurrentVideoContext.Provider value={{ curVideo, setCurVideo, courseDetails, setCourseDetails }}>
      <div className="bg-[#29303b] w-full" id="navbar-course">
        <h1 className="h-[50px] text-[#fff] text-[1.2rem] items-center bg-[#29303b] flex relative ">{courseDetails.name}</h1>
      </div>
      <div className="flex gap-5">
        <Grid item xs={5}>
          <KhoahocDetailList />
        </Grid>

        <div id="video-khoa-hoc">

          <KhoahocDetailVideo />

        </div>
      </div>
    </CurrentVideoContext.Provider >

  );
}

export default CourseDetails;
