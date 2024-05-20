import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import NotificationsIcon from '@mui/icons-material/Notifications';

//context
import { CurrentCourseContext,CurrentVideoContext, CurrentItemContext } from "../../../state/CoursecDetailProvider"

//component
import AddStudentForm from "../../../components/Form/AddStudentForm"
import CreateItemForm from "../../../components/Form/CreateItemForm"
import KhoahocDetailVideo from "./KhoahocDetailItem/KhoahocDetailVideo"
import KhoahocDetailList from "./KhoahocDetailItem/KhoahocDetailList"
import { UserContext } from "../../../App"
import * as courses from '../../../service/courses'
import CommentVideo from './KhoahocDetailItem/CommentVideo'
import ListVideo from '../../../components/CourseDetail/ListVideo'
import ListStudent from "../../../components/CourseDetail/ListStudent"
import ListPost from "../../../components/CourseDetail/ListPost"
import Notification from '../../../components/CourseDetail/Notification'


function KhoahocDetailItem() {

  //context
  const {curVideo} = useContext(CurrentVideoContext)
  const {courseDetails, setCourseDetails} = useContext(CurrentCourseContext)
  const {curItem} = useContext(CurrentItemContext)
  //state
  const [showCreateItem, setShowCreateItem] = useState(false)
  const [showFormAddStudent, setShowFormAddStudent] = useState(false)
  const [showListtudent, setShowListStudent] = useState(false)
  const { user } = useContext(UserContext)
  const { courseId, ownerId } = useParams()

  // function
  const handleSeeStudent = () => {
    setShowListStudent(pre => !pre)
  }
  const handleAddStudent = () => {
    setShowFormAddStudent(pre => !pre)
  }
  const handleCreateItem = () => {
    setShowCreateItem(pre => !pre)
  }
  const handleNotification = (e) => {
    const listNoti = document.getElementById('ListNoti')
    if (listNoti.style.display === 'none') {
      listNoti.style.display = 'block'
    } else {
      listNoti.style.display = 'none'
    }
  }
  useEffect(() => {
    document.title = courseDetails.title
    courses.getCourseDetail(ownerId, courseId)
      .then(res => {
        console.log('res detail course', res)
        setCourseDetails(res)
        document.title = res.title
      })
      .catch(err => {
        console.log('err detail course', err)
      })
  }, [ownerId, courseId, showCreateItem])


  return (
    <>
      <div className="bg-[rgb(41,48,59)] w-full box-border flex justify-between" id="navbar-course">
        <h1 className="h-[56px] text-[#fff] text-[1.2rem] items-center bg-[#29303b] flex relative mt-0">{courseDetails.title}</h1>
        <div className='teacher-action'>
          <div className="flex">
            {
              (user._id === courseDetails.owner || user.role === 'admin') ?
                (
                  <>
                    <button className="text-white mr-2 p-4" onClick={handleCreateItem}><PersonSearchIcon /> <p className="hidden md:inline">Item</p></button>
                    <button className="text-white mr-2 p-4" onClick={handleSeeStudent}><PersonSearchIcon /> <p className="hidden md:inline">See</p></button>
                    <button className="text-white mr-5 p-4" onClick={handleAddStudent}><PersonAddAltIcon /><p className="hidden md:inline">Add</p></button>
                  </>
                ) : <></>}
            <div className="relative">
              <button className="text-white mr-5 p-4 " onClick={handleNotification}>
                <NotificationsIcon />
                <p className="hidden md:inline">Notification</p>
              </button>
              <Notification id='ListNoti' />
            </div>
          </div>
        </div>
      </div>
      {showFormAddStudent && <AddStudentForm idAdd={courseId} isCourse={true} />}
      {showCreateItem && <CreateItemForm idCourse={courseId} isCourse={true} />}
      <div className="flex gap-5 w-full">
        <div className="w-[20%] bg-[#fffff5] rounded-2xl shadow-2xl md:max-h-[700px] h-[500px]">
          <KhoahocDetailList />
        </div>
        <div id="video-khoa-hoc" className="flex-1">
          <KhoahocDetailVideo url={curVideo?.link} />
        </div>
      </div>
      <div className='bg-white min-h-[500px] w-full'>
        <CommentVideo item={curItem} />
        <ListVideo item={curItem} />
        <ListPost item={curItem} />
        {(showListtudent && (user?.role === 'admin' || courseDetails?.owner === user._id)) &&
          <ListStudent courseId={courseId} />}
      </div>
    </>
  );
}

export default KhoahocDetailItem;
