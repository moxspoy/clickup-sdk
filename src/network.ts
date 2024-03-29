import axios from "axios";
import {BASE_URL, DEFAULT_TIMEOUT} from "./constants";

const axiosClient = (token: string) => axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
    }
});

axios.interceptors.response.use(response => {
    try {
        return response.data;
    } catch (error) {
        throw error;
    }
});


export default axiosClient;
