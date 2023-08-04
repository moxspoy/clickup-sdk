declare const ClickupSdk: (token: string) => {
    getUser: (teamId: number, userId: number) => Promise<import("axios").AxiosResponse<any>>;
    getTask: (id: string) => Promise<import("axios").AxiosResponse<any>>;
    updateTask: (taskId: string, params: any) => Promise<import("axios").AxiosResponse<any>>;
    updateTaskStatus: (taskId: string, status: string) => Promise<import("axios").AxiosResponse<any>>;
};
export default ClickupSdk;
