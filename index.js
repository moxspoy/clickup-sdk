import axiosClient from "./src/network.js";

let api = null;

const ClickupSdk = {
    api: null,
    token: '',
    setToken: (_token) => {
        this.token = _token;
        api = axiosClient(_token);
    },
    getUser: async (teamId, userId) => await api().get(`/team/${teamId}/user/${userId}`),
    getTask: async (id) => await api().get(`/task/${id}/`),
}

export default ClickupSdk;
