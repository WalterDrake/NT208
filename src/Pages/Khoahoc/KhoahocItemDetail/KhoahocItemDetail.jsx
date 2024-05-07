import { useParams } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { Grid } from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import AddStudentForm from "../../../components/Form/AddStudentForm";
import KhoahocDetailVideo from "./KhoahocDetailItem/KhoahocDetailVideo";
import KhoahocDetailList from "./KhoahocDetailItem/KhoahocDetailList";
import { useContext } from "react";
import { UserContext } from "../../../App";
import * as courses from '../../../service/courses'
import * as videos  from '../../../service/videos'
import {AddDealine,AddVideo,AddDocument} from '../../../components/teacherAction/courseAction'


export const CurrentVideoContext = createContext();
function CourseDetails() {
  const [showFormAddStudent, setShowFormAddStudent] = useState(false) 
  const handleAddStudent = () => {
    setShowFormAddStudent(!showFormAddStudent)
  }
  const {user} = useContext(UserContext)
  const { courseID } = useParams();
  console.log(user)
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
  const [showFormStudent, setShowFormStudent] = useState(false)
  const handleSeeStudent = () => {
    setShowFormStudent(!showFormStudent)
  }
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
      <div className="bg-[#29303b] w-full flex justify-between" id="navbar-course">
      <h1 className="h-[50px] text-[#fff] text-[1.2rem] items-center bg-[#29303b] flex relative ">{courseDetails.name}</h1>
      <div className='teacher-action'>
      {
        (user.role === 'teacher' || user.role === 'admin')  ?
        (
         <div className="flex">
          <button className="text-white mr-2 p-4" onClick={handleSeeStudent}><PersonSearchIcon/> Student</button>
          <button className="text-white mr-5 p-4" onClick={handleAddStudent}><PersonAddAltIcon/> Student</button>
         </div>
        
       ):<></>}
      </div>
      </div>
      {showFormAddStudent && <AddStudentForm idAdd={courseID} isCourse={true} />}
      <div className="flex gap-5">
        <Grid item xs={5}>
          <KhoahocDetailList />
        </Grid>

        <div id="video-khoa-hoc">
          <KhoahocDetailVideo />
        </div>
      </div>
      <div id='teacher-action'>
      {
          (user.role === 'teacher' || user.role === 'admin')  ?
       (
      <>
        <AddVideo courseID={courseID}/>
        <AddDocument courseID={courseID}/>
        <AddDealine courseID={courseID}/>
      </>
       ):<></>}
      </div>

    </CurrentVideoContext.Provider >

  );
}

export default CourseDetails;
