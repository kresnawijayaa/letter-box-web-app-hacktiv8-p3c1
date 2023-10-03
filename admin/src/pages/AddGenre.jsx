import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGenres } from "../store/actionCreator";
import { useNavigate } from "react-router-dom";

export default function AddGenre() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
  });

  const createHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(addGenres(form)).then(() => {
        navigate("/genre");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <>
      <section className="bg-gray-900 text-white min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-8 sm:px-6 lg:py-12 lg:px-8">
          <div className="gap-20 flex">
            <div>
              <img
                src="https://img.freepik.com/premium-photo/group-minions-are-lined-up-train-track_902049-22119.jpg?w=740"
                alt=""
                className="rounded-lg h-[200px] w-[200px] object-cover transition duration-500 group-hover:scale-105 sm:h-[460px] sm:w-[600px]"
              />
            </div>

            <section className="relative w-full max-w-lg">
              <div className="w-full flex flex-col">
                <div className="mx-auto w-full max-w-lg text-center">
                  <h1 className="text-2xl font-bold sm:text-3xl">
                    Create Genre
                  </h1>
                </div>

                <form
                  onSubmit={createHandler}
                  className="mx-auto mt-10 w-full px-8 space-y-7"
                >
                  <div>
                    <div className="relative">
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
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
                      Create Genre
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
