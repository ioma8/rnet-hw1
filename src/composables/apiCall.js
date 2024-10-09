import axios from "axios"
import { apiUser, apiKey, apiInstance, host } from "@/rayConfig"


let apiCall = (endpoint = "company", params = {}) => {
    return axios({
        method: 'get',
        url: host + endpoint + '/',
        params: params,
        auth: {
            username: apiUser,
            password: apiKey,
        },
        headers: {
            "X-Instance-Name": apiInstance
        }
    });
}

export default apiCall