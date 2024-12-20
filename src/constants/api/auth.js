import BASE_URL from "../apiConfig";

const prefix = "/auth";

const SIGNUP = `${BASE_URL}${prefix}/signup`;
const LOGIN = `${BASE_URL}${prefix}/login`;
const LOGOUT = `${BASE_URL}${prefix}/logout`;
const CHANGE_PASSWORD = `${BASE_URL}${prefix}/changepassword`;
const RESET_PASSWORD = `${BASE_URL}${prefix}/resetpassword`;
const LOCK = `${BASE_URL}${prefix}/khoa`;
const HISTORY_LOCK = `${BASE_URL}${prefix}/khoahistory`;
const CUA = `${BASE_URL}${prefix}/cua`;

export default {
  SIGNUP,
  LOGIN,
  LOGOUT,
  CHANGE_PASSWORD,
  RESET_PASSWORD,
  LOCK,
  HISTORY_LOCK,
  CUA,
};
