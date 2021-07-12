import axios from "axios";
import {BASE_URL, DEFAULT_TIMEOUT} from "./constants";

const axiosClient = (token) => axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
    }
});

axiosClient().interceptors.request.use(request => {
    console.log(request);
    return request;
});


axiosClient().interceptors.response.use(response => {
    try {
        return response.data;
    } catch (error) {
        throw error;
    }
});


export default axiosClient;
