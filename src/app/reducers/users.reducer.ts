export function UsersReducer(state,action){
  switch(action.type){
    case 'CURRENT_USER_PROFILE':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}