import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const axiosNew = axios.create({
  baseURL: "http://localhost:8017/api",
});

const Profile = () => {
  let { id } = useParams();
  const [imageUrl, setImageUrl] = React.useState(null); // State để lưu trữ URL hình ảnh

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');

    if (fileField.files.length > 0) {
      formData.append('image', fileField.files[0]); // Append the selected file to formData
    }

    try {
      const response = await axiosNew.post('/upload/image', formData); // Removed unnecessary body and headers configuration

      console.log(response.data); // Log the response data
    } catch (error) {
      console.error('There has been a problem with your axios request:', error);
    }
  };


  const hanleFileChange = (e) => {
    const file = e.target.files[0]
    setImageUrl(URL.createObjectURL(file))
  }


  return (
    <div>
      <li>{id}</li>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" onChange={(e) => hanleFileChange(e)} />
        <button type="submit">Upload hình ảnh</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />} {/* Hiển thị hình ảnh */}
    </div>
  );
};

export default Profile;