"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const constants_js_1 = require("./constants.js");
const axiosClient = (token) => axios_1.default.create({
    baseURL: constants_js_1.BASE_URL,
    timeout: constants_js_1.DEFAULT_TIMEOUT,
    headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
    }
});
axios_1.default.interceptors.response.use(response => {
    try {
        return response.data;
    }
    catch (error) {
        throw error;
    }
});
exports.default = axiosClient;
