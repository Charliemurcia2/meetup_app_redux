import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./favorite-slice";

import meetupSlice from "./meetUp-slice";
import uiSlice from "./ui-slice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    meetup: meetupSlice.reducer,
    user: userSlice.reducer,
    ui: uiSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});

export default store;
