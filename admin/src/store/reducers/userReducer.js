import {
  USERS_DETAIL_FETCH_SUCCESS,
  USERS_FETCH_SUCCESS,
  USERS_LOGIN_SUCCESS,
} from "../actionTypes";

const initialState = { users: [], detail: {} };
function userReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case USERS_LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case USERS_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
