import { configureStore } from "@reduxjs/toolkit";
import isOpen from "./component/redux/isOpen";
import sign from "./component/redux/sign";
import account from "./component/redux/account";
import pass from "./component/redux/pass";

export const store = configureStore({
  reducer: {
    isOpen,
    sign,
    account,
    pass,
  },
});
