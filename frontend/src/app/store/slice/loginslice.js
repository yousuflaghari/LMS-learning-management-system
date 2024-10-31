import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    students: [],
    isLoggedIn: false,
    loggedInUser: null,
    signupError: null,
  },
  reducers: {
    setUser: (state, action) => {
      const emailExists = state.students.some(
        (student) => student.email === action.payload.email
      );

      if (emailExists) {
        state.signupError = "Email already exists!";
      } else {
        state.students.push({
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          password: action.payload.password,
          category: action.payload.category,
        });
        state.signupError = null;
      }
    },

    checkLogin: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = state.students.find(
        (student) => student.email === email && student.password === password
      );

      if (foundUser) {
        state.isLoggedIn = true;
        state.loggedInUser = foundUser;
      } else {
        state.isLoggedIn = false;
        state.loggedInUser = null;
      }
    },
  },
});

export const { setUser, checkLogin } = userSlice.actions;
export default userSlice.reducer;
