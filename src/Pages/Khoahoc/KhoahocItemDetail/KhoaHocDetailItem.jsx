import { useParams } from "react-router-dom"
import { useEffect, useState, createContext } from "react"

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'

import AddStudentForm from "../../../components/Form/AddStudentForm"
import CreateItemForm from "../../../components/Form/CreateItemForm"
import KhoahocDetailVideo from "./KhoahocDetailItem/KhoahocDetailVideo"
import KhoahocDetailList from "./KhoahocDetailItem/KhoahocDetailList"
import { useContext } from "react"
import { UserContext } from "../../../App"
import * as courses from '../../../service/courses'
import  CommentVideo from './KhoahocDetailItem/CommentVideo'
import ListVideo from '../../../components/CourseDetail/ListVideo' 
import ListStudent from "../../../components/CourseDetail/ListStudent"

export const CurrentVideoContext = createContext();
function KhoahocDetailItem() {
  //state
  const [courseDetails, setCourseDetails] = useState({})

  const [showCreateItem, setShowCreateItem] = useState(false)
  const [showFormAddStudent, setShowFormAddStudent] = useState(false)
  const [showListtudent, setShowListStudent] = useState(false)
  const [curVideoList, setCurVideoList] = useState([])
  const [curPostList, setCurPostList] = useState([])
  const [curItem, setCurItem] = useState({})
  const [curCommentList, setCurCommentList] = useState([])
  const { user } = useContext(UserContext)
  const { courseId, ownerId } = useParams();
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
  }, [ownerId, courseId,showCreateItem])


  
  const [curVideourl, setCurVideourl] = useState('')


  return (

    <CurrentVideoContext.Provider value={{ courseDetails, setCourseDetails,curVideourl,setCurVideourl,curVideoList, setCurVideoList, curPostList, setCurPostList,curCommentList, setCurCommentList,curItem, setCurItem}}>
      <div className="bg-[#29303b] w-full flex justify-between" id="navbar-course">
        <h1 className="h-[50px] text-[#fff] text-[1.2rem] items-center bg-[#29303b] flex relative ">{courseDetails.name}</h1>
        <div className='teacher-action'>
          {
            (user.role === 'teacher' || user.role === 'admin') ?
              (
                <div className="flex">
                  <button className="text-white mr-2 p-4" onClick={handleCreateItem}><PersonSearchIcon /> Item</button>
                  <button className="text-white mr-2 p-4" onClick={handleSeeStudent}><PersonSearchIcon /> Student</button>
                  <button className="text-white mr-5 p-4" onClick={handleAddStudent}><PersonAddAltIcon /> Student</button>
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
          <KhoahocDetailVideo url={curVideourl}/>
        </div>
      </div>
      <div className='bg-white min-h-[500px] w-full'>
        <CommentVideo/>
        <ListVideo item={curItem}/>
      </div>
      <div>
        {showListtudent && 
          <ListStudent courseId={courseId} />}
      </div>
    </CurrentVideoContext.Provider >

  );
}

export default KhoahocDetailItem;
