import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../store/actionCreator";
import GenreRow from "../components/GenreRow";
import { Link } from "react-router-dom";

export default function Genre() {
  const [loading, setLoading] = useState(true);
  const { genres } = useSelector((state) => state.genreReducer);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchGenres());
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
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between">
            <h1 className="text-4xl font-semibold">Movie Genre</h1>
            <Link
              className="justify-self-end inline-flex items-center gap-2 rounded border border-white px-6 py-2 text-white hover:text-gray-400 hover:border-gray-400"
              to="/genre/add"
            >
              <span className="text-xs font-normal"> Add Genre </span>
            </Link>
          </div>
          <br />
          {loading ? (
            <div className="w-full h-screen flex flex-col justify-center items-center">
              <div id="loader">
                <div id="box"></div>
                <div id="hill"></div>
              </div>
              <h1 id="text-loading" data-text="It's loading…">
                It's loading…
              </h1>
            </div>
          ) : (
            <div className="gap-8">
              <div className="rounded-md border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr>
                      <th className="whitespace-nowrap pl-8 py-6 font-medium text-white text-left">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-6 font-medium text-white text-left">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {genres.map((genre) => {
                      return <GenreRow key={genre.id} genre={genre} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
