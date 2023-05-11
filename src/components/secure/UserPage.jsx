import React from 'react';
import LocalStorageWorker from "../store/LocalStorageWorker";
import {useNavigate} from "react-router-dom";

const UserPage = () => {

    let localStorageWorker = new LocalStorageWorker();
    const navigate = useNavigate();

    const logout = () => {
      localStorageWorker.deleteToken();
      navigate("/");
    }
    return (
        <div>
            <h1>User zone</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default UserPage;