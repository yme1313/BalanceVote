import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    id: "",
    password: "",
    isLoggedIn: false,
  },
});