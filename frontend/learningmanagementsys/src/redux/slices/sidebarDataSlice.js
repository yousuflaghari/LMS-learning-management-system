import { createSlice } from "@reduxjs/toolkit";
import { getSidebarData } from "../../data/sidebardata";
const initialState = {
  sidebarItems: [],
};
const sidebarDataSlice = createSlice({
  name: "sidebarData",
  initialState,
  reducers: {
    setSidebarData: (state, action) => {
      // action.payload should be the role
      state.sidebarItems = getSidebarData(action.payload);
    },
  },
});
export const { setSidebarData } = sidebarDataSlice.actions;
export default sidebarDataSlice.reducer;
