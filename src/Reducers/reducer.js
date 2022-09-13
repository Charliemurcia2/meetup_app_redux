
export const types = {
  formattingData: 'FORMATTING-DATA',
  formattingUsers: 'FORMATTING-USERS',
  isPopupDelete: 'IS-POPUP-DELETE'
}

export const initialState = {
  users: [],
  meetups: [],
  userMeetupTitle: '',
  isPopupDelete: false
}
const reducer = (state, action) => {
  switch(action.type) {
    case types.formattingData : {
      const meetups = []
      for (const key in action.payload) {
        const meetup = {
          id: key,
          ...action.payload[key]
        }
        meetups.push(meetup)
      }
      return {
        ...state,
        meetups: meetups
      }
    }
    case types.formattingUsers : {
      const users = []
      for (const key in action.payload) {
        const user = {
          id: key,
          ...action.payload[key]
        }
        users.push(user)
      }
      return {
        ...state,
        users: users
      }
    }

    case types.isPopupDelete : {
      return {
        ...state,
        isPopupDelete: !state.isPopupDelete
      }
    }
    
    default:
      return state
  }
}

export default reducer