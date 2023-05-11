import UserPage from "../secure/UserPage";

class LocalStorageWorker {

    #key = "token";

    saveToken(token){
        window.localStorage.setItem(this.#key, token);
    }

    getToken(){
        return window.localStorage.getItem(this.#key);
    }

    deleteToken(){
        window.localStorage.removeItem(this.#key);
    }

}

export default LocalStorageWorker;