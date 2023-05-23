import axios from "axios";

class UserApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/api/v1/secure"
        });
    }

    async getHello(token) {
        return await this.#axios.get("/get-hello", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }

    async getUser(token) {
        return await this.#axios.get("/get-user", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }

    async getFilm(token) {
        return await this.#axios.get("/getAll", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }

    // async deleteFilm(id) {
    //     return await this.#axios.delete("/deleteById",id);
    // }
}

export default UserApiWorker;