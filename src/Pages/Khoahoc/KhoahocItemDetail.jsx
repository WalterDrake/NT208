import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CourseDetails() {
  const { courseName } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    // Thay đổi URL này theo API của bạn
    const apiUrl = `https://my-api.com/courses/${courseName}`;

    axios.get(apiUrl)
      .then(response => {
        setCourseDetails(response.data);
      })
      .catch(error => {
        console.error("Could not fetch course details:", error);
      });
  }, [courseName]);  // Chạy lại useEffect mỗi khi courseName thay đổi

  if (!courseDetails) {
    return <div>Loading course details...</div>;
  }

  return (
    <div>
      <h1>{courseDetails.name}</h1>
      <p>{courseDetails.description}</p>
      {/* Hiển thị thêm thông tin chi tiết khóa học nếu cần */}
    </div>
  );
}

export default CourseDetails;