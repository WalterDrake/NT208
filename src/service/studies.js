import httpRequests from '../utils/httpRequests';
// lấy danh sách các lớp học
export const getStudies = async (id_user) => {
    try {
        const response = await httpRequests.get('/studies/', { params: { id_user } });
        return response;
    } catch (error) {
        throw error.response;
    }
}
// lấy thông tin một lớp học
export const getStudy = async (id_study) => { // id_study là id của lớp học đó
    try {
        const response = await httpRequests.get(`studies/${id_study}`);
        return response;
    } catch (error) {
        throw error.response;
    }
}
// tạo một lớp học mới
export const createStudy = async (data) => {
    try {
        const response = await httpRequests.post('/studies/', data);
        return response;
    } catch (error) {
        throw error.response;
    }
}
// cập nhật thông tin một lớp học
export const updateStudy = async (id_study, data) => {
    try {
        const response = await httpRequests.put(`studies/${id_study}`, data);
        return response;
    } catch (error) {
        throw error.response;
    }
}
// xóa một lớp học
export const deleteStudy = async (id_study) => {
    try {
        const response = await httpRequests.delete(`studies/${id_study}`);
        return response;
    } catch (error) {
        throw error.response;
    }
}
// lấy danh sách thành viên của một lớp học
export const getStudyMembers = async (id_study) => { 
    try {
        const response = await httpRequests.get(`studies/${id_study}/members`);
        return response;
    } catch (error) {
        throw error.response;
    }
}


// Router.route("/")
//   .get((req, res) => {
//     res.status(StatusCodes.OK).json({ message: "GET: API get list Study" });
//   })
//   .post(studyValidation.createNew, studyController.createNew);

// Router.route("/:id")
//   .get(studyController.getDetailsAll)
//   .put(studyValidation.updateStudy, studyController.updateStudy);

// Router.route("/get/All")
//   .get(studyController.getDetailsAll)
//   .put(studyValidation.updateStudy, studyController.updateStudy);