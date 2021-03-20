// import all types of actions

// set initialState = { currentUser: null }

export default function(state = initialState, action) {
  switch(action.type) {
    // case action type:
      // return {
        // ...state,
        // currentUser: action.payload.user
      // }
    default:
      return state
  }
}