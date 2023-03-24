import { atom } from "recoil";

export const navIndexState = atom({
  key: "navIndexState",
  default: null,
});

export const isClick = atom({
  key: "isClick",
  default: false,
});
