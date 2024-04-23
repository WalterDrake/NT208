import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CourseDetails() {
  const { courseName } = useParams();
  const [courseDetails, setCourseDetails] = useState({
    name: 'hocReact',
    description: 'hoc react tren web',
    videoList: [{
      id: 1,
      title: ' Bài 1:hoc react',
      url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
      description: 'hoc react'
    },
    {
      id: 2,
      title: ' Bài 2:hoc vuejs',
      url: 'https://www.youtube.com/watch?v=x7l0JX68XyA&list=PL_-VfJajZj0U9nEXa4qyfB4U5ZIYCMPlz&index=44',
      description: 'hoc vuejs'
    }
    ]
  });
  const [curVideo,setCurVideo] = useState(courseDetails.videoList[0].url)
  console

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
    <div>
      <div className="bg-[#29303b] w-full" id="navbar-course">
        <h1 className="h-[50px] text-[#fff] text-[1.2rem] items-center bg-[#29303b] flex relative ">{courseDetails.name}</h1>
      </div>
      <ul className = " bg-slate-500 w-[12%]"  id="listVideo">
        {courseDetails.videoList.map((video) =>
        {
            return (
              <li key={video.id} className=' bg-white' onClick={()=>{setCurVideo(video.url)}}>
                <h2>{video.title}</h2>
                <p className="">{video.description}</p>
              </li>
            )
          }
  )}
      <button onClick></button>
      </ul>
      <div id="video-khoa-hoc">
        <p>{curVideo}</p>
      </div>
     {/* Hiển thị thêm thông tin chi tiết khóa học nếu cần */}
    </div>
  );
}

export default CourseDetails;