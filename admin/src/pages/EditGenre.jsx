import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editGenre, fetchGenreDetail } from "../store/actionCreator";
import { useNavigate, useParams } from "react-router-dom";

export default function EditGenre() {
  const { detail } = useSelector((state) => state.genreReducer);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(fetchGenreDetail(id));
  }, []);

  useEffect(() => {
    if (detail.name) {
      setForm(detail);
    }
  }, [detail]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(editGenre(form, detail.id));
      navigate("/genre");
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
              <img
                src="https://img.freepik.com/premium-photo/3d-cute-cartoon-minions-character-ai-generative_913665-616.jpg?w=740"
                alt=""
                className="rounded-lg h-[200px] w-[200px] object-cover transition duration-500 group-hover:scale-105 sm:h-[460px] sm:w-[600px]"
              />
            </div>

            <section className="relative w-full max-w-lg">
              <div className="w-full flex flex-col">
                <div className="mx-auto w-full max-w-lg text-center">
                  <h1 className="text-2xl font-bold sm:text-3xl">Edit Genre</h1>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mx-auto mt-10 w-full px-8 space-y-7"
                >
                  <div>
                    <div className="relative">
                      <input
                        name="name"
                        onChange={handleChange}
                        value={form.name}
                        type="text"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Genre name"
                      />
                    </div>
                  </div>

                  <br />

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="inline-block rounded-lg bg-transparent px-5 py-3 text-sm font-medium text-white border border-white hover:text-gray-400 hover:border-gray-400"
                    >
                      Edit Genre
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
