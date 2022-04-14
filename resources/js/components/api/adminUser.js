import axios from "./index";

class AdminUser {
    static Users = (data) => {
        return axios.get(`${base}/users`, data);
    };
}

let base = "admin";

export default AdminUser;
