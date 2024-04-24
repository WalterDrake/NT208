
import React from 'react';

function VideoPlayer({ curVideo }) {
 const getEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
    }
    return `https://www.youtube.com/embed/${videoId}`;
 };

 return (
    <div id="video-khoa-hoc">
      {curVideo && (
        <iframe
          width="560"
          height="315"
          src={getEmbedUrl(curVideo)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
 );
}

export default VideoPlayer;
