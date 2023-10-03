import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import movieReducer from "./reducers/movieReducer";
import genreReducer from "./reducers/genreReducer";
import userReducer from "./reducers/userReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movieReducer,
  genreReducer,
  userReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
