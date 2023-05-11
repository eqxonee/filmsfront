import React, {useEffect} from 'react';
import LocalStorageWorker from "../store/LocalStorageWorker";

const AuthPage = () => {

    let localStorageWorker = new LocalStorageWorker();

    useEffect(() => {
        localStorageWorker.saveToken("12345");
    },[]);
    return (
        <div>
            <h1>Auth</h1>
        </div>
    );
};

export default AuthPage;