import BASE_URL from "../apiConfig";

const prefix = "/users";

const GET_USERS = `${BASE_URL}${prefix}/allusers`;
const UPDATE_USERS = `${BASE_URL}${prefix}/updateusers`;
const DELETE_USER = `${BASE_URL}${prefix}/deleteUser`;
const GET_UNLOCK_HISTORY = `${BASE_URL}${prefix}/getunlockhistory`;
const IMAGE = `${BASE_URL}${prefix}/image`;
const CLOSE_TIME = `${BASE_URL}${prefix}/closetime`;
const ALL_HISTORY = `${BASE_URL}${prefix}/allhistory`;
const POST_FINGER_HISTORY = `${BASE_URL}${prefix}/postfingerhistory`;
const GET_FINGER_HISTORY = `${BASE_URL}${prefix}/fingerhistory`;
const IMAGE_WARNING = `${BASE_URL}${prefix}/imagewarning`;
const UPDATE_CLOSE_TIME = `${BASE_URL}${prefix}/updateClosetime`;
const SEND_MAIL_CUA = `${BASE_URL}${prefix}/sendmailcua`;

export default {
  GET_USERS,
  UPDATE_USERS,
  DELETE_USER,
  GET_UNLOCK_HISTORY,
  IMAGE,
  CLOSE_TIME,
  ALL_HISTORY,
  POST_FINGER_HISTORY,
  GET_FINGER_HISTORY,
  IMAGE_WARNING,
  UPDATE_CLOSE_TIME,
  SEND_MAIL_CUA,
};
