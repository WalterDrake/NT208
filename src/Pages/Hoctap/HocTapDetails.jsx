import { useParams } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { Grid } from "@mui/material";

import HocTapDetailVideo from "./HocTapDetailVideo";
import HocTapDetailList from "./HocTapDetailList";
import * as studies from "../../service/studies"


export const CurrentVideoContext = createContext();
function HocTapDetails() {
  const {StudyID } = useParams();
  const [studyDetails, setstudyDetails] = useState({
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
  // useEffect(() => {
  //   studies.getStudy(StudyID)
  //     .then(res => {
  //       console.log('res', res)
  //       setstudyDetails(res)
  //     })
  //     .catch(err => {
  //       console.log('err', err)
  //     })
  //     studies.getVideos(StudyID)
  //     .then(res => {
  //       console.log('res', res) // trả ra danh sach các video
  //       studyDetails.videoList = res
  //     })
  // }, [StudyID]);
  const [curVideo, setCurVideo] = useState(studyDetails?.videoList[0].url)


  return (

    <CurrentVideoContext.Provider value={{ curVideo, setCurVideo,studyDetails, setstudyDetails }}>
      <div className="bg-[#29303b] w-full" id="navbar-course">
        <h1 className="h-[50px] text-[#fff] text-[1.2rem] items-center bg-[#29303b] flex relative ">{studyDetails.name}</h1>
      </div>
      <div className="flex gap-5">
        <Grid item xs={5}>
          <HocTapDetailList />
        </Grid>

        <div id="video-khoa-hoc">

          <HocTapDetailVideo />

        </div>
      </div>
    </CurrentVideoContext.Provider >

  );
}

export default HocTapDetails;
