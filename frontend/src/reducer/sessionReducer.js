import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT} from '../action/sessionAction';

const initialState = {
isAuthenticated: false,
user: undefined
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
      isAuthenticated: !!action.currentUser,
      user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
      isAuthenticated: false,
      user: undefined
      };
    default:
      return state;
  }
}
