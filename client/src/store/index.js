import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  MOVIES_DETAIL_FETCH_SUCCESS,
  MOVIES_FETCH_SUCCESS,
} from "./actionTypes";
import { logger } from "../middlewares/logger";

const initialState = { movies: [], detail: {} };

function rootReducer(state = initialState, action) {
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

let store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
