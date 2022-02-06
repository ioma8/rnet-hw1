import axios from "axios"


let apiCall = (endpoint = "company", params = {}) => {
    return axios({
        method: 'get',
        url: 'https://app.raynet.cz/api/v2/' + endpoint + '/',
        params: params,
        auth: {
            username: "kolcarjakub@gmail.com",
            password: "crm-77d91f29774c452696513de28e63ea7c",
        },
        headers: {
            "X-Instance-Name": "rnethw1"
        }
    });
}

// TODO: api credentials to separate file which is not in GIT

export default apiCall