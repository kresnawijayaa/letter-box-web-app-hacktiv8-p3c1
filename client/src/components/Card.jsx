import { Link } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <>
      <li>
        <Link
          to={`/movie/${movie.slug}`}
          className="block overflow-hidden group"
        >
          <img
            src={movie.imgUrl}
            alt=""
            className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[360px]"
          />

          <div className="relative pt-3">
            <h3 className="text-md text-white group-hover:underline group-hover:underline-offset-4">
              {movie.title}
            </h3>

            <p className="mt-2 text-md">
              ⭐ {movie.rating}
              <span className="text-xs">/ 5</span> 🍿 {movie.Genre.name}
            </p>
          </div>
        </Link>
        <br />
      </li>
    </>
  );
}
