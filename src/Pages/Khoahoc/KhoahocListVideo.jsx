
import React from 'react';

function VideoList({ videoList, setCurVideo }) {
 return (
    <ul className="bg-slate-500 w-[12%]" id="listVideo">
      {videoList.map((video) => (
        <li
          key={video.id}
          className="bg-white"
          onClick={() => setCurVideo(video.url)}
        >
          <h2>{video.title}</h2>
          <p className="">{video.description}</p>
        </li>
      ))}
    </ul>
 );
}

export default VideoList;

