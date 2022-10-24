import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
    totalFavorites: 0,
    favoritesLabel: "To Favorites",
  },
  reducers: {
    addToFavorite(state, action) {
      state.favorites.push(action.payload);
      state.totalFavorites = state.totalFavorites + 1;
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (meetup) => meetup.id !== action.payload
      );
      state.totalFavorites = state.totalFavorites - 1;
    },
    isFavorite(state, action) {
      if (state.favorites.some((meetupId) => meetupId === action.payload)) {
        state.favoritesLabel = "Removed from favorites";
      } else {
        state.favoritesLabel = "To Favorites";
      }
    },
  },
});

export const favoriteActions = favoriteSlice.actions;
export default favoriteSlice;
