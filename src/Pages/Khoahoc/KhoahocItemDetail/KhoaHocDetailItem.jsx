import { useParams } from "react-router-dom"
import { useEffect, useState, createContext } from "react"

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import NotificationsIcon from '@mui/icons-material/Notifications';

import AddStudentForm from "../../../components/Form/AddStudentForm"
import CreateItemForm from "../../../components/Form/CreateItemForm"
import KhoahocDetailVideo from "./KhoahocDetailItem/KhoahocDetailVideo"
import KhoahocDetailList from "./KhoahocDetailItem/KhoahocDetailList"
import { useContext } from "react"
import { UserContext } from "../../../App"
import * as courses from '../../../service/courses'
import CommentVideo from './KhoahocDetailItem/CommentVideo'
import ListVideo from '../../../components/CourseDetail/ListVideo'
import ListStudent from "../../../components/CourseDetail/ListStudent"
import ListPost from "../../../components/CourseDetail/ListPost"
import Notification from '../../../components/CourseDetail/Notification'

export const CurrentVideoContext = createContext();
function KhoahocDetailItem() {
  //state
  const [courseDetails, setCourseDetails] = useState({})
  const [showCreateItem, setShowCreateItem] = useState(false)
  const [showFormAddStudent, setShowFormAddStudent] = useState(false)
  const [showListtudent, setShowListStudent] = useState(false)
  const [curVideoList, setCurVideoList] = useState([{}])
  const [curPostList, setCurPostList] = useState([{}])
  const [curNotiList, setCurNotiList] = useState([{}])
  const [curItem, setCurItem] = useState({})
  const [curCommentList, setCurCommentList] = useState([{}])
  const { user } = useContext(UserContext)
  const { courseId, ownerId } = useParams();
  const [curVideourl, setCurVideourl] = useState('')
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

    <CurrentVideoContext.Provider value={{ courseDetails, setCourseDetails, curVideourl, setCurVideourl, curVideoList, setCurVideoList, curPostList, setCurPostList, curCommentList, setCurCommentList, curItem, setCurItem,curNotiList, setCurNotiList }}>
      <div className="bg-[#29303b] w-full flex justify-between" id="navbar-course">
        <h1 className="h-[50px] text-[#fff] text-[1.2rem] items-center bg-[#29303b] flex relative ">{courseDetails.title}</h1>
        <div className='teacher-action'>
          {
            (user._id === courseDetails.owner || user.role === 'admin') ?
              (
                <div className="flex">
                  <button className="text-white mr-2 p-4" onClick={handleCreateItem}><PersonSearchIcon /> <p className="hidden md:inline">Item</p></button>
                  <button className="text-white mr-2 p-4" onClick={handleSeeStudent}><PersonSearchIcon /> <p className="hidden md:inline">See</p></button>
                  <button className="text-white mr-5 p-4" onClick={handleAddStudent}><PersonAddAltIcon /><p className="hidden md:inline">Add</p></button>
                  <div className="relative">
                    <button className="text-white mr-5 p-4 " onClick={handleNotification}><NotificationsIcon />
                      <p className="hidden md:inline">Notification</p>
                    </button>
                    <Notification id='ListNoti' />
                  </div>
                </div>
              ) : <></>}
        </div>
      </div>
      {showFormAddStudent && <AddStudentForm idAdd={courseId} isCourse={true} />}
      {showCreateItem && <CreateItemForm idCourse={courseId} isCourse={true} />}
      <div className="flex gap-5 w-full">
        <div className="w-[20%] bg-[#fffff5] rounded-2xl shadow-2xl md:max-h-[700px] h-[500px]">
          <KhoahocDetailList />
        </div>
        <div id="video-khoa-hoc" className="flex-1">
          <KhoahocDetailVideo url={curVideourl} />
        </div>
      </div>
      {/* <div className='bg-white min-h-[500px] w-full'>
        <CommentVideo />
        <ListVideo item={curItem} />
        <ListPost item={curItem} />
      </div> */}
      <div>
        {(showListtudent && (user?.role === 'admin' || courseDetails?.owner === user._id)) &&
          <ListStudent courseId={courseId} />}
      </div>
    </CurrentVideoContext.Provider >

  );
}

export default KhoahocDetailItem;
