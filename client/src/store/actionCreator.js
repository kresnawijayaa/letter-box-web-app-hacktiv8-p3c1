import {
  MOVIES_FETCH_SUCCESS,
  MOVIES_DETAIL_FETCH_SUCCESS,
} from "./actionTypes";

export function fetchMovies() {
  return async (dispatch) => {
    try {
      const res = await fetch("https://api.kresnawijaya.tech/pub");
      const data = await res.json();
      dispatch({ type: MOVIES_FETCH_SUCCESS, payload: data });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchMovieDetail(slug) {
  return async (dispatch) => {
    try {
      const res = await fetch(`https://api.kresnawijaya.tech/pub/${slug}`);
      const data = await res.json();
      dispatch({ type: MOVIES_DETAIL_FETCH_SUCCESS, payload: data });
      console.log(data, "disiniiii");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}
