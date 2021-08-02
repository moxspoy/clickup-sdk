import axiosClient from "./src/network.js";

const ClickupSdk = (token) => {
    const api = axiosClient(token);
    return {
        getUser: async (teamId, userId) => await api.get(`/team/${teamId}/user/${userId}`),
        getTask: async (id) => await api.get(`/task/${id}/`),
        updateTask: async (taskId, params) => await api.put(`/task/${taskId}/`, params),
        updateTaskStatus: async (taskId, status) => await this.updateTask(taskId, {status}),
    }
};

export default ClickupSdk;
