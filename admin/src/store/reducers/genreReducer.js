import {
  GENRES_DETAIL_FETCH_SUCCESS,
  GENRES_FETCH_SUCCESS,
} from "../actionTypes";

const initialState = { genres: [], detail: {} };
function genreReducer(state = initialState, action) {
  switch (action.type) {
    case GENRES_FETCH_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    case GENRES_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
}

export default genreReducer;
