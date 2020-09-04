import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";
import account from "./account";
import bookstore from "./bookstore";

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  account,
  bookstore,
});
