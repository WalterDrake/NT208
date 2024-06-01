let apiRoot = "";
// console.log('import.meta.env: ', import.meta.env)
// console.log('process.env: ', process.env)

// Môi trường Dev sẽ chạy localhost với port 8017
if (process.env.BUILD_MODE === "dev") {
  apiRoot = "https://uitwebelearning.onrender.com";
} else if (process.env.BUILD_MODE === "production") {
  apiRoot = "https://uitwebelearning.onrender.com";
}

// Môi trường Production sẽ cần api endpoint chuẩn của các bạn
// if (process.env.BUILD_MODE === 'production') {
//   // Lưu ý: Đây là domain ví dụ sau khi Deploy Production (xem video 75 và video 76 để hiểu rõ kiến thức phần này, còn hiện tại mình đã xóa domain này rồi, đừng cố truy cập làm gì =))
//   apiRoot = 'https://trello-api-0gbu.onrender.com'
// }
//onsole.log('🚀 ~ file: constants.js:7 ~ apiRoot:', apiRoot)
export const API_ROOT = apiRoot;
