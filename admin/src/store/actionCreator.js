import {
  GENRES_FETCH_SUCCESS,
  GENRES_DETAIL_FETCH_SUCCESS,
  MOVIES_FETCH_SUCCESS,
  MOVIES_DETAIL_FETCH_SUCCESS,
  USERS_FETCH_SUCCESS,
  USERS_DETAIL_FETCH_SUCCESS,
} from "../store/actionTypes";

import Toastify from "toastify-js";

function toast(message, status) {
  let color;
  if (status === "success") {
    color = "linear-gradient(to right, #1b2e4d, #213555)";
  } else {
    color = "linear-gradient(to right, #8a0808, #800505)";
  }
  Toastify({
    text: message,
    className: "info",
    style: {
      background: color,
    },
  }).showToast();
}

export function fetchMovies() {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/movies", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await res.json();
      dispatch({ type: MOVIES_FETCH_SUCCESS, payload: data });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function addMovies(movieData) {
  return async () => {
    try {
      const res = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });
      if (!res.ok) {
        console.log("Failed to add movie");
      }
      const data = await res.json();
      toast(`Create movie success!`, "success");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchMovieDetail(slug) {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/movies/${slug}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await res.json();
      dispatch({ type: MOVIES_DETAIL_FETCH_SUCCESS, payload: data });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function editMovie(movieData, id) {
  return async () => {
    try {
      const res = await fetch(`http://localhost:3000/movies/update/${id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });
      if (!res.ok) {
        console.log("Failed to edit movie");
      }
      const data = await res.json();
      toast(`Edit movie success!`, "success");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteMovies(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/movies/delete/${id}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (res.ok) {
        dispatch(fetchMovies());
        toast(`Delete movie success!`, "success");
      } else {
        console.log("Delete failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchGenres() {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/genres", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await res.json();
      dispatch({ type: GENRES_FETCH_SUCCESS, payload: data });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function addGenres(genreData) {
  return async () => {
    try {
      const res = await fetch("http://localhost:3000/genres", {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(genreData),
      });
      if (!res.ok) {
        console.log("Failed to add genre");
      }
      const data = await res.json();
      toast(`Create genre success!`, "success");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchGenreDetail(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/genres/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await res.json();
      dispatch({ type: GENRES_DETAIL_FETCH_SUCCESS, payload: data });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function editGenre(genreData, id) {
  return async () => {
    try {
      const res = await fetch(`http://localhost:3000/genres/update/${id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(genreData),
      });
      if (!res.ok) {
        console.log("Failed to edit genre");
      }
      const data = await res.json();
      toast(`Edit genre success!`, "success");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteGenres(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/genres/delete/${id}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (res.ok) {
        dispatch(fetchGenres());
        toast(`Delete genre success!`, "success");
      } else {
        console.log("Delete failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchUsers() {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/users", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await res.json();
      dispatch({ type: USERS_FETCH_SUCCESS, payload: data });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function addUsers(userData) {
  return async () => {
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!res.ok) {
        console.log("Failed to add user");
      }
      const data = await res.json();
      toast(`Create admin success!`, "success");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function fetchUserDetail(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/users/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const data = await res.json();
      dispatch({ type: USERS_DETAIL_FETCH_SUCCESS, payload: data });
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function editUser(userData, id) {
  return async () => {
    try {
      console.log(userData, "apanihhhh");
      const res = await fetch(`http://localhost:3000/users/update/${id}`, {
        method: "PUT",
        headers: {
          access_token: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (!res.ok) {
        console.log("Failed to edit user");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteUsers(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3000/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      if (res.ok) {
        dispatch(fetchUsers());
        toast(`Delete admin success!`, "success");
      } else {
        console.log("Delete failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function handleLogin(form) {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("access_token", data.access_token);
        toast(`Login success, welcome!`, "success");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
}
