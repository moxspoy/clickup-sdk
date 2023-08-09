import axiosClient from "./src/network";

const ClickupSdk = (token: string) => {
    const api = axiosClient(token);
    return {
        getUser: async (teamId: number, userId: number) => await api.get(`/team/${teamId}/user/${userId}`),
        getTask: async (id: string) => await api.get(`/task/${id}/`),
        updateTask: async (taskId: string, params: any) => await api.put(`/task/${taskId}/`, params),
        updateTaskStatus: async (taskId: string, status: string) => await api.put(`/task/${taskId}/`, {status}),
    }
};

export default ClickupSdk;
