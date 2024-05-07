import  * as httpRequest from '../utils/httpRequest'

export const GetCourseAll = async () => {
    try {
        const response = await httpRequest.get('/courses/GetCourseAll/')
        console.log('response',response)
        return Array(response)
    } catch (error) {
        throw error.response
    }
}

export const getCourseListTeacher = async (id) => {
    try {
        const response = await httpRequest.get(`/courses/GetListCourseTeacher/${id}`)
        return response
    } catch (error) {
        throw error.response.data
    } 
}

export const getCourseListStudent = async (id) => {
    try {
        const response = await httpRequest.get(`/courses/GetListCoutseStudent/${id}`)
        return response
    } catch (error) {
        throw error.response.data
    }
}


export const getCourse = async (id_teacher,id_courese) => {
    try {
        const response = await httpRequest.get(`/courses/GetDetailCourse//${id_teacher}/${id_courese}`)
        return response
    } catch (error) {
        throw error.response
    }
}
export const getCoursesStudying = async (id) => {
    const data = id ;
    try {
        const response = await httpRequest.get(`/courses/Khoahoc/Studying/`,data)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}

export const getCoursesDone = async (id) => {
    try {
        const data = id ;
        const response = await httpRequest.get(`/courses/Khoahoc/Done/`,data)
        return response
    } catch (error) {
        throw error.response
    }
}

export const createCourse  = async (owner,{title,description}) => {
    try {
        const data = {
            title,
            description,
            admin: owner._id,
            owner : owner._id,
        }
        const response = await httpRequest.post('/courses/CreateCourse/', data)
        return response
    } catch (error) {
        console.log('err',error)
        throw error.response
    }
}

export const addStudent = async (id, data) => {
    try {
        const response = await httpRequest.post(`/courses/UpdateCourse${id}`, data)   // id cousesr
        return response.data
    } catch (error) {
        throw error.response.data
    }
}   

export const updateCourse = async (id, data) => {
    try {
        const response = await httpRequest.put(`/courses/UpdateCourse/${id}`, data)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}


// Router.route("/UpdateCourse/:id").put(courseController.updateCourseByAdmin); // truyen vao id course
// Router.route("/AddStudent/:idstudent/:idcourse").put(
//   courseController.pushStudentIntoCourse
// ); // truyen vao idstudent va idcourse
// Router.route("/DeleteStudentCourse/:idstudent/:idcourse").put(
//   courseController.deleteStudentFromCourse
// ); // truyen vao idstudent va idcourse
// Router.route("/GetDetailCourse/:idteacher/:idcourse").get(
//   courseController.getOneCoursebyTeacher
// ); // truyen vao id teacher va idcourse
// Router.route("/GetListStudent/:id").get(
//   courseController.getListStudentofCoures
// ); // truyen vao id khoa hoc
// Router.route("/GetListCourseTeacher/:id").get(
//   courseController.getListCourseofTeacher
// ); // truyen vao id giao vien
// Router.route("/ChamDiem/:idstudent/:idcourse/diemso").post(
//   courseController.chamdiemchoStudent
// ); // truyen vao id student id course va diem so
// Router.route("/DeleteOneItem").delete(courseController.deleteOneItem); // truyen vao id item
// Router.route("/GetListCoutseStudent/:id").get(
//   courseController.getListCoursesofStudentid
// ); // truyen vao id hoc sinh
// Router.route("/GetListCoutseDone/:id").get(
//   courseController.getListCourseStudentDone
// ); // truyen vao id hoc sinh
// Router.route("/GetMark/:idstudent/:idcourse").delete(
//   courseController.getMarkOfCourse
// ); // truyen vao idstudent va idcourse