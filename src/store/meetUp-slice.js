import { createSlice } from "@reduxjs/toolkit";

const meetupSlice = createSlice({
  name: "meetup",
  initialState: {
    meetups: [],
    userMeetupTitle: "",
    isPopupDelete: false,
    meetupURL: "https://react-learn-1e665-default-rtdb.firebaseio.com/meetups",
  },
  reducers: {
    formatData(state, action) {
      const meetups = [];
      for (const key in action.payload) {
        const meetup = {
          id: key,
          ...action.payload[key],
        };
        meetups.push(meetup);
      }
      state.meetups = meetups;
    },
    toggleDeletePopUp(state, actions) {
      state.isPopupDelete = !state.isPopupDelete;
    },
  },
});

export const meetupActions = meetupSlice.actions;
export default meetupSlice;

// const searchFilter = searchTerm => {
//   const searchResult = staticLoadMeetups.filter(meetup => {
//    if (meetup.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//     return meetup
//    }
//    return ''
//   })
//   setLoadedMeetups(searchResult)
// }

// const onSearchTermChange = newTerm => {
//   if (newTerm.length !== 0) {
//     searchFilter(newTerm)
//   } else {
//     setLoadedMeetups(staticLoadMeetups)
//   }
// }
