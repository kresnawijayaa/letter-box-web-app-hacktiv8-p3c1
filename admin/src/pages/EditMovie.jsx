import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editMovie,
  fetchMovieDetail,
  fetchGenres,
} from "../store/actionCreator";
import { useNavigate, useParams } from "react-router-dom";
import SelectGenre from "../components/SelectGenre";

export default function EditMovie() {
  const { detail } = useSelector((state) => state.movieReducer);
  const { genres } = useSelector((state) => state.genreReducer);
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    title: "",
    synopsis: "",
    trailerUrl: "",
    imgUrl: "",
    rating: "",
    genreId: "",
    authorId: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(fetchMovieDetail(slug));
    dispatch(fetchGenres());
  }, []);

  useEffect(() => {
    if (detail.title) {
      setForm(detail);
    }
  }, [detail]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {};

    // Validasi title (required)
    if (!form.title.trim()) {
      validationErrors.title = "Title is required";
    }

    // Validasi synopsis (required)
    if (!form.synopsis.trim()) {
      validationErrors.synopsis = "Synopsis is required";
    }

    // Validasi rating (min 1)(max 5)
    const rating = parseFloat(form.rating);
    if (isNaN(rating) || rating < 1 || rating > 5) {
      validationErrors.rating = "Rating must be a number between 1 and 5";
    }

    // Jika ada kesalahan validasi, tampilkan pesan error
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Atur pesan error ke state
      return;
    }

    // Bersihkan pesan error jika tidak ada kesalahan
    setErrors({});
    try {
      await dispatch(editMovie(form, detail.id));
      navigate("/movie");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-gray-900 text-white min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-8 sm:px-6 lg:py-12 lg:px-8">
          <div className="gap-20 flex">
            <div>
              {form.imgUrl ? (
                <img
                  src={form.imgUrl}
                  className="rounded-lg h-[200px] w-[200px] object-cover transition duration-500 group-hover:scale-105 sm:h-[720px] sm:w-[600px]"
                />
              ) : (
                <img
                  src="https://i.pinimg.com/564x/f8/99/78/f8997879fe9228ecf1b6e1b47ccb6370.jpg"
                  className="opacity-80 rounded-lg h-[200px] w-[200px] object-cover transition duration-500 group-hover:scale-105 sm:h-[600px] sm:w-[600px]"
                />
              )}
            </div>

            <section className="relative w-full max-w-lg lg:min-h-screen">
              <div className="w-full flex flex-col">
                <div className="mx-auto w-full max-w-lg text-center">
                  <h1 className="text-2xl font-bold sm:text-3xl">Edit Movie</h1>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-10 w-full px-8 space-y-7"
                >
                  <div>
                    {errors.title && (
                      <div className="mb-2 text-red-500 text-sm">
                        {errors.title}
                      </div>
                    )}
                    <div className="relative">
                      <input
                        name="title"
                        onChange={handleChange}
                        value={form.title}
                        type="text"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Movie title"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <select
                        name="genreId"
                        value={form.genreId}
                        onChange={handleChange}
                        id="HeadlineAct"
                        className="w-full bg-transparent rounded-lg border border-gray-200 text-white p-4 pe-12 text-sm shadow-sm"
                      >
                        <option disabled value="">
                          Please select
                        </option>

                        {genres.map((genre) => {
                          return <SelectGenre key={genre.id} genre={genre} />;
                        })}
                      </select>
                    </div>
                  </div>

                  <div>
                    {errors.rating && (
                      <div className="mb-2 text-red-500 text-sm">
                        {errors.rating}
                      </div>
                    )}
                    <div className="relative">
                      <input
                        name="rating"
                        onChange={handleChange}
                        value={form.rating}
                        type="text"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Movie rating (1 - 5)"
                      />
                    </div>
                  </div>

                  <div>
                    {errors.synopsis && (
                      <div className="mb-2 text-red-500 text-sm">
                        {errors.synopsis}
                      </div>
                    )}
                    <div className="relative">
                      <textarea
                        name="synopsis"
                        onChange={handleChange}
                        value={form.synopsis}
                        rows={4}
                        type="text"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Movie synopsis"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        name="imgUrl"
                        value={form.imgUrl}
                        onChange={handleChange}
                        type="text"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Movie image"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        name="trailerUrl"
                        value={form.trailerUrl}
                        onChange={handleChange}
                        type="text"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Movie trailer"
                      />
                    </div>
                  </div>

                  <br />

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="inline-block rounded-lg bg-transparent px-5 py-3 text-sm font-medium text-white border border-white hover:text-gray-400 hover:border-gray-400"
                    >
                      Edit Movie
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
