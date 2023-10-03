import {
  MOVIES_FETCH_SUCCESS,
  MOVIES_DETAIL_FETCH_SUCCESS,
} from "../actionTypes";

const initialState = { movies: [], detail: {} };
function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS:
      return {
        ...state,
        movies: action.payload,
      };
    case MOVIES_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}

export default movieReducer;
