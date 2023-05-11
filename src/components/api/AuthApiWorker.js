//import React, {useEffect, useState} from "@types/react";
import axios from "axios";

class AuthApiWorker {

    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/api/v1/auth"
        });
    }

    async authenticateUser(userCredentials) {
        return await this.#axios.post("/authenticate", userCredentials);
    }
}

export default AuthApiWorker;