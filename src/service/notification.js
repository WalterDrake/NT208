import * as httpRequests from "../utils/httpRequest";

export const getAddNoti = async () => {
  try {
    const result = await httpRequests.get("/notis/getall");
    return result;
  } catch (err) {
    throw err.response;
  }
};

export const addNoti = async (data) => {
  try {
    const result = await httpRequests.post("/notis/addtall", data);
    return result;
  } catch (err) {
    throw err.response;
  }
};

export const createNoti = async (data) => {
  try {
    console.log('thang dep trai ' ,data)
    const result = await httpRequests.post("/notis/CreateNewNoti", data);
    return result;
  } catch (err) {
    throw err.response;
  }

}

export const GetlistNoti =  async (id) => {
  try {
    const result = await httpRequests.get(`/notis/GetlistNoti/${id}`);
    return result;
  } catch (err) {
    throw err.response;
  }
}

// Router.route('/CreateNewNoti').post(notiController.createNewNotiOfItem) // truyen data
// Router.route('/DeleteNoti/:id').delete(notiController.deleteNotiOfItem) // truyen vao id noti
// Router.route('/GetlistNoti/:id').delete(notiController.getListNotiOfItem) // truyen id item