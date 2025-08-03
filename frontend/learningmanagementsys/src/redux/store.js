import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import sidebarDataReducer from "./slices/sidebarDataSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    sidebarData: sidebarDataReducer,
  },
});
