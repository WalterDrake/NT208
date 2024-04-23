import { useState } from 'react'

function CourseDetails() {
     
    const [CourseDetails, setCourseDetails] = useState({
        
        List: [
            {
                id: 1,
                url: 'https://www.youtube.com/embed/uXWycyeTeCs' // URL video thay vì tên
            }, 
            {
                id: 2,
                url: 'https://www.youtube.com/embed/anotherVideoId' // URL video thay vì tên
            },
            {
                id: 3,
                url: 'https://www.youtube.com/embed/yetAnotherVideoId' // URL video thay vì tên
            },
            {
              id: 4,
              url: 'https://www.youtube.com/embed/yetAnotherVideoId' // URL video thay vì tên
          },
          {
            id: 5,
            url: 'https://www.youtube.com/embed/yetAnotherVideoId' // URL video thay vì tên
        } 
        ]
    });

    const [selectedUrl, setSelectedUrl] = useState('')
    const [loadingIframe, setLoadingIframe] = useState(true)

    const handleClick = (id) => {
        const video = CourseDetails.List.find(video => video.id === id);
        if (video) {
            setSelectedUrl(video.url);
            setLoadingIframe(true); // Bắt đầu hiển thị loading indicator
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button style={{ padding: '10px 15px', marginBottom: '10px' }} onClick={() => handleClick(1)}>Week 0</button>
                <button style={{ padding: '10px 15px', marginBottom: '10px' }} onClick={() => handleClick(2)}>Week 1</button>
                <button style={{ padding: '10px 15px', marginBottom: '10px' }} onClick={() => handleClick(3)}>Week 3</button>
                <button style={{ padding: '10px 15px', marginBottom: '10px' }} onClick={() => handleClick(4)}>Week 4</button>
                <button style={{ padding: '10px 15px', marginBottom: '10px' }} onClick={() => handleClick(5)}>Week 5</button>

            </div>
            {selectedUrl && (
                <iframe
                    src={selectedUrl}
                    onLoad={() => setLoadingIframe(false)}
                    style={{ width: '300px', height: '315px', marginLeft: '20px' }}
                    title="Video Player"
                ></iframe>
            )}
        </div>
    );
}

export default CourseDetails;
