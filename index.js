import axiosClient from "./src/network.js";

const ClickupSdk = (token) => {
    const api = axiosClient(token);
    return {
        getUser: async (teamId, userId) => await api.get(`/team/${teamId}/user/${userId}`),
        getTask: async (id) => await api.get(`/task/${id}/`),
    }
}

export default ClickupSdk;
