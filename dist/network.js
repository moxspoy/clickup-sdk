"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _constants = require("./constants");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var axiosClient = function axiosClient(token) {
  return _axios["default"].create({
    baseURL: _constants.BASE_URL,
    timeout: _constants.DEFAULT_TIMEOUT,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  });
};
_axios["default"].interceptors.response.use(function (response) {
  try {
    return response.data;
  } catch (error) {
    throw error;
  }
});
var _default = axiosClient;
exports["default"] = _default;
//# sourceMappingURL=network.js.map