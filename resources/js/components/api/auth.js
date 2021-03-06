import axios from "./index";

class AuthApi {
    static Login = (data) => {
        return axios.post(`${base}/login`, data);
    };

    static Register = (data) => {
        return axios.post(`${base}/register`, data);
    };

    static Logout = (data) => {
        return axios.post(`${base}/logout`, data, {
            headers: { Authorization: "Bearer" + `${data.token}` },
        });
    };
    static Info = (data) => {
        return axios.get(`${base}/login`, data, {
            headers: { Authorization: "Bearer" + `${data.token}` },
        });
    };
}

let base = "auth";

export default AuthApi;
