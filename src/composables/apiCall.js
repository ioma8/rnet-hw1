import axios from "axios"
import { apiUser, apiKey, apiInstance } from "@/rayConfig"


let apiCall = (endpoint = "company", params = {}) => {
    return axios({
        method: 'get',
        url: 'https://app.raynet.cz/api/v2/' + endpoint + '/',
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