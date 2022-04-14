import React from "react";
import { useState, useEffect } from "react";

//api
import AdminUser from "~/api/adminUser";

//table components
import UserTable from "./tables/UserTable";
function Users() {
    const [DataUsers, setDataUser] = useState([]);
    const [error, setError] = useState(undefined);
    useEffect(() => {
        (async () => {
            try {
                let response = await AdminUser.Users();
                if (response.data && response.data.status === false) {
                    return setError(response.data.error);
                }
                return setDataUser(response.data);
            } catch (err) {
                console.log(err);
                if (err.response) {
                    return setError(err.response.data.error);
                }
                return setError("There has been an error.");
            }
        })();
    }, []);
    return <UserTable DataUsers={DataUsers} />;
}

export default Users;
