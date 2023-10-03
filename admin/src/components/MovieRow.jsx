import { Link } from "react-router-dom";
import { deleteMovies } from "../store/actionCreator";
import { useDispatch } from "react-redux";

export default function MovieRow({ movie }) {
  const dispatch = useDispatch();

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      dispatch(deleteMovies(movie.id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <tr>
        <td className="whitespace-nowrap pl-8 py-4 font-medium text-white">
          <img
            alt="Paul Clapton"
            src={movie.imgUrl}
            className="h-[100px] w-[68px] object-cover shadow-sm"
          />
        </td>
        <td className="whitespace-nowrap px-8 py-2 font-medium text-lg text-white">
          {movie.title}
        </td>
        <td className="whitespace-nowrap px-12 py-2 text-white text-2xl">
          {movie.rating} <span className="text-xs">of 5</span>
        </td>
        <td className="whitespace-nowrap px-12 py-2 text-white">
          {movie.Genre.name}
        </td>
        <td className="whitespace-nowrap px-12 py-2 text-white">
          {movie.User.email}
        </td>
        <td className="whitespace-nowrap px-4 py-12 text-white flex items-center">
          <Link
            className="inline-flex items-center gap-2 rounded border border-white px-8 py-2 text-white hover:text-gray-400 hover:border-gray-400"
            to={`/movie/edit/${movie.slug}`}
          >
            <span className="text-xs font-normal"> Edit </span>
          </Link>
          <button
            className="inline-flex items-center gap-2 px-10 py-2 text-white hover:text-gray-400 hover:border-gray-400"
            onClick={handleDelete}
          >
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
}
