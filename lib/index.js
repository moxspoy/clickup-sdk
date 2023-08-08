var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axiosClient from "./src/network.js";
const ClickupSdk = (token) => {
    const api = axiosClient(token);
    return {
        getUser: (teamId, userId) => __awaiter(void 0, void 0, void 0, function* () { return yield api.get(`/team/${teamId}/user/${userId}`); }),
        getTask: (id) => __awaiter(void 0, void 0, void 0, function* () { return yield api.get(`/task/${id}/`); }),
        updateTask: (taskId, params) => __awaiter(void 0, void 0, void 0, function* () { return yield api.put(`/task/${taskId}/`, params); }),
        updateTaskStatus: (taskId, status) => __awaiter(void 0, void 0, void 0, function* () { return yield api.put(`/task/${taskId}/`, { status }); }),
    };
};
export default ClickupSdk;
