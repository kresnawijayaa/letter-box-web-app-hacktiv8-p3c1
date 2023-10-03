import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLogin } from "../store/actionCreator";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(handleLogin(form))
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
      <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-gray-900">
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-4/6">
          <img
            alt="Welcome"
            src="https://wallpaperaccess.com/full/1501024.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-2/6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-white">
              Login to Your Account!
            </h1>
          </div>

          <form
            onSubmit={loginHandler}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <div className="relative">
                <input
                  type="email"
                  className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                  placeholder="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <input
                  type="password"
                  className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <br />

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="inline-block rounded-lg bg-transparent px-5 py-3 text-sm font-medium text-white border border-white hover:text-gray-400 hover:border-gray-400"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
