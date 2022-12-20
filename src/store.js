import { configureStore } from "@reduxjs/toolkit";
import isOpen from "./component/redux/isOpen";

export const store = configureStore({
  reducer: {
    isOpen,
  },
});
