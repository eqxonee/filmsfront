import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import NotAuthPage from "./NotAuthPage";
import LocalStorageWorker from "../store/LocalStorageWorker";


const SecureLayout = () => {

    let localStorageWorker = new LocalStorageWorker();
    let [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        let  token = localStorageWorker.getToken();

        if(token===null){
            setIsAuth(false);
        }else
        {
            setIsAuth(true);
        }
    });

    return (
        <div>
            {
                isAuth
                    ? <Outlet/>
                    : <NotAuthPage/>
            }

        </div>
    );
};

export default SecureLayout;