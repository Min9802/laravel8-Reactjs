import axios from "./index";

class usersApi {
    static Users = (data) => {
        return axios.get(`${base}/users`, data);
    };
}

let base = "auth";

export default usersApi;
