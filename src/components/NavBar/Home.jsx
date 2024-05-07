import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'


import * as studies from '../../service/studies'
import * as courses from '../../service/courses'
import KhoahocItem from '../../Pages/Khoahoc/KhoahocItem'
import { Link } from 'react-router-dom'
import routes from '../../config/routes'
import HocTapItem from '../../Pages/Hoctap/HocTapItem'
import MyCalender from '../Sidebar/Calendar'
export default function Home() {
  const [courseData, setCoursesData] = useState([]);
  const [hocTapData, setHocTapData] = useState([]);

  useEffect(() => {
    document.title = 'Trang chủ';

    studies.getStudies().then((data) => {
      setHocTapData(data)
    })
      .catch((error) => {
        console.log(error, 'khong lay duoc hoc tap')
      })

    courses.GetCourseAll().then((data) => {
      setCoursesData(data)
    })
      .catch((error) =>
        console.log(error, 'khong lay duoc khoa hoc'),
        setCoursesData([
          {
            id: 1,
            image: 'src\\assets\\KhoaHoc_img\\WannaGame.jpg',
            ten: 'WannaGame',
            mota: 'Chuỗi training CTF do CLB Wanna.W1n tổ chức',
            siso: 30,
            tinhtrang: 1
          },

          {
            id: 2,
            image: "src\\assets\\KhoaHoc_img\\AWS.jpg",
            ten: "AWS Cloud Training",
            mota: "Khoa Mạng máy tính và Truyền thông",
            siso: 140,
            tinhtrang: 1
          },

          {
            id: 3,
            image: "src\\assets\\KhoaHoc_img\\TDL.png",
            ten: "Truyền dữ liệu",
            mota: "Khoa Mạng máy tính và Truyền thông dữ liệu",
            siso: 100,
            tinhtrang: 1
          },


          {
            id: 4,
            image: "src\\assets\\KhoaHoc_img\\dotNET.png",
            ten: "Lập trình mạng căn bản",
            mota: "Khoa Mạng máy tính và Truyền thông",
            siso: 95,
            tinhtrang: 1
          },



          {
            id: 5,
            image: "src\\assets\\KhoaHoc_img\\KNTT.jpg",
            ten: "Training Kỹ năng thông tin",
            mota: "Do Thư viện Trường Đại học Công nghệ Thông tin tổ chức",
            siso: 140,
            tinhtrang: 1
          },


          {
            id: 6,
            image: "src\\assets\\KhoaHoc_img\\WebProgramming.png",
            ten: "Lập trình Web",
            mota: "Khoa Mạng máy tính và Truyền thông",
            siso: 140,
            tinhtrang: 1
          },


          {
            id: 7,
            image: "src\\assets\\KhoaHoc_img\\Vidieukhien.png",
            ten: "Vi xử lý - Vi điều khiển",
            mota: "Khoa Kỹ thuật máy tính",
            siso: 140,
            tinhtrang: 1
          },


          {
            id: 8,
            image: "src\\assets\\KhoaHoc_img\\cryptology.jpg",
            ten: "Mật mã học",
            mota: "Khoa Mạng máy tính và Truyền thông",
            siso: 140,
            tinhtrang: 1
          }
        ])
      )
  }, [])
  return (
    <Grid container className='w-full' spacing={4}>
      <Grid item xs={12} md={9} className='min-w[12.5rem]'>
        <div className='min-h-[12rem] min-w-[12.5rem] h-auto bg-gradient-to-r from-blue-500 to-blue-200 bg-opacity-50 rounded-lg'
          id='home-hello-box'>
          <h1 className='text-3xl text-white font-bold align-middle '>Chào mừng đến với trang web học tập</h1>
        </div>
        <div className="mt-8 min-h-[24rem] h-auto bg-[#F0F7FF] rounded-lg">
          <div className="title justify-between">
            <h1 className='text-[#050506]  font-extrabold  font-sans text-3xl pl-[4rem] pt-3'>Đề Xuất</h1>
            <div className='flex justify-end mr-4'>
              <p className='bg-blue-500 text-white rounded-lg p-1 hover:bg-blue-800 '><Link to={routes.khoahoc}>Xem thêm</Link></p>
            </div>
          </div>
          <div className='content min-h-[20rem]  h-auto w-auto bg-custom-gradient rounded-lg mt-10 flex flex-col md:flex-row md:flex-wrap'>
            {courseData.map((course, index) => {
              if (index < 4) {
                return <KhoahocItem KhoaHoc={course} key={index} />
              }
            })}
          </div>
        </div>
        <div className="mt-10 h-[24rem] bg-[#F0F7FF] rounded-lg">
          <div className="title justify-between">
            <h1 className='text-[#050506]  font-extrabold  font-sans text-3xl pl-[4rem] pt-3'>Đề Xuất HocTap</h1>
            <div className='flex justify-end mr-4'>
              <p className='bg-blue-500 text-white rounded-lg p-1 hover:bg-blue-800 '><Link to={routes.hoctap}>Xem thêm</Link></p>
            </div>
          </div>
          <div className='content min-h-[20rem] h-auto bg-custom-gradient rounded-lg mt-10 md:flex flex-wrap'>
            {courseData.map((course, index) => {
              if (index < 4) {
                return <HocTapItem HocTap={course} key={course._id} />
              }
            })}
          </div>
        </div>
      </Grid>
      <Grid item xs={0} md={3} className='md:block hidden bg-[#f0f7ff]'>
        <MyCalender />
      </Grid>
    </Grid>
  );
}