import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'


import * as studies from '../../service/studies'
import * as courses from '../../service/courses'
import * as admin from '../../service/admin'
import * as groups from '../../service/groups'
import KhoahocItem from '../../Pages/Khoahoc/KhoahocItem'
import { Link } from 'react-router-dom'
import routes from '../../config/routes'
import HocTapItem from '../../Pages/Hoctap/HocTapItem'
import MyCalender from '../RightSideBar/Calendar'
import ListuserAcitve from '../RightSideBar/ListuserAcitve'
import useUser from '../../hook/useUser'
import HocNhomItem from '../../Pages/Hocnhom/HocNhomItem'
export default function Home() {
  const [courseData, setCoursesData] = useState([]);
  const [hocTapData, setHocTapData] = useState([]);
  const [groupData, setGroupData] = useState([]);
  const { user } = useUser()

  useEffect(() => {
    document.title = 'Trang chủ';
    // call api get hoc tap
    studies.getStudiesAll().then((data) => {
      setHocTapData(data[0][0])
    })
      .catch((error) => {
        console.log(error, 'khong lay duoc hoc tap')
      })
    // call api get course and group
    if (user.role === 'admin') {
      courses.GetCourseAll()
        .then((res) => {
          setCoursesData(res[0])
        })
        .catch((err) => {
          console.log(err)
        })
      groups.getAllGroupByAdmin().then((res) => {
        setGroupData(res)
      }).catch((err) => {
        console.log(err)
      })
    }
    else if (user.role === 'teacher') {
      courses.getCourseListTeacher(user._id).then((res) => {
        if (res)
          setCoursesData(res)
      }).catch((err) => {
        console.log(err)
      })
      groups.getAllGroupByIdUser(user._id).then((res) => {
        setGroupData(res)
      }).catch((err) => {
        console.log(err)
      })
    }
    else if (user.role === 'student') {
      courses.getCourseListStudent(user._id).then((res) => {
        setCoursesData(res)
      }).catch((err) => {
        console.log(err)
      })
      groups.getAllGroupByIdUser(user._id).then((res) => {
        setGroupData(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [])
  return (
    <Grid container className='w-full' spacing={4}>
      <Grid item xs={12} md={9} className='min-w[12.5rem] h-auto'>
        <div className='min-h-[12rem] min-w-[12.5rem] h-auto bg-gradient-to-r from-blue-500 to-blue-200 bg-opacity-50 rounded-lg'
          id='home-hello-box'>
          <h1 className='text-3xl text-white font-bold align-middle '>Chào mừng đến với trang web học tập</h1>
        </div>
        <div className="mt-8 min-h-[24rem] bg-[#F0F7FF] rounded-lg">
          <div className="title justify-between">
            <h1 className='text-[#050506]  font-extrabold  font-sans text-3xl pl-[4rem] pt-3'>Đề Xuất Khóa học</h1>
            <div className='flex justify-end mr-4'>
              <p className='bg-blue-500 text-white rounded-lg p-1 hover:bg-blue-800 '><Link to={routes.khoahoc}>Xem thêm</Link></p>
            </div>
          </div>
          <div className='content min-h-[12rem]  w-auto bg-custom-gradient rounded-lg mt-10 flex flex-col md:flex-row md:flex-wrap'>
            {courseData.map((course, index) => {
              if (index < 4) {
                return <KhoahocItem KhoaHoc={course} key={index} />
              }
            })}
          </div>
        </div>
        <div className="mt-8 min-h-[24rem] h-auto bg-[#F0F7FF] rounded-lg">
          <div className="title justify-between">
            <h1 className='text-[#050506]  font-extrabold  font-sans text-3xl pl-[4rem] pt-3'>Đề Xuất Nhóm của bạn</h1>
            <div className='flex justify-end mr-4'>
              <p className='bg-blue-500 text-white rounded-lg p-1 hover:bg-blue-800 '><Link to={routes.group}>Xem thêm</Link></p>
            </div>
          </div>
          <div className='content min-h-[20rem]  w-auto bg-custom-gradient rounded-lg mt-10 flex flex-col md:flex-row md:flex-wrap'>
            {groupData.map((group, index) => {
              if (index < 4) {
                return <HocNhomItem HocNhom={group} key={index} />
              }
            })}
          </div>
        </div>
      </Grid>
      <Grid item xs={0} md={3} className='md:block hidden bg-[#f0f7ff]'>
        <MyCalender />
        <ListuserAcitve />
      </Grid>
    </Grid>
  );
}