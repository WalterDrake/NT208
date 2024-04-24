// CourseDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import VideoList from './KhoahocListVideo.jsx';
import VideoPlayer from './KhoahocVideo.jsx';


function CourseDetails() {
 const { courseName } = useParams();
 const [courseDetails, setCourseDetails] = useState({
    name: 'hocReact',
    description: 'hoc react tren web',
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
}

export default CourseDetails;
