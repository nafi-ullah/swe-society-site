import Cookies from "js-cookie";
import { dpurl, jwt, username, userregno } from "./cookiesName";

export const getJWT = () => {
  return Cookies.get(jwt);
};
export const getUserName = () => {
  return Cookies.get(username);
};
export const getUserReg = () => {
  return Cookies.get(userregno);
};
export const getUserDP = () => {
  return Cookies.get(dpurl);
};
