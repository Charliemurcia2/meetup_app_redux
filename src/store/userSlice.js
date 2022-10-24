import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    usersURL: "https://react-learn-1e665-default-rtdb.firebaseio.com/users",
  },
  reducers: {
    formatUsers(state, action) {
      const users = [];
      for (const key in action.payload) {
        const user = {
          id: key,
          ...action.payload[key],
        };
        users.push(user);
      }
      state.users = users;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
