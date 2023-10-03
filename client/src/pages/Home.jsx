import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../store/actionCreator";
import Card from "../components/Card";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { movies } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchMovies());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => getData(), 4000);
  }, []);

  return (
    <>
      <section className="bg-gray-900 text-white min-h-screen">
        {loading ? (
          <div className="w-full h-screen flex flex-col justify-center items-center">
            <div id="loader">
              <div id="box"></div>
              <div id="hill"></div>
            </div>
            <br />
            <br />
            <h1 id="text-loading" data-text="It's loading…">
              It's loading…
            </h1>
          </div>
        ) : (
          <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {movies.map((movie) => {
                return <Card key={movie.id} movie={movie} />;
              })}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
