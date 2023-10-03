import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../store/actionCreator";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const createHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(addUsers(form)).then(() => {
        navigate("/admin");
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
                src="https://wallpaperaccess.com/full/2273458.jpg"
                alt=""
                className="rounded-lg h-[200px] w-[200px] object-cover transition duration-500 group-hover:scale-105 sm:h-[600px] sm:w-[600px]"
              />
            </div>

            <section className="relative w-full max-w-lg lg:h-screen">
              <div className="w-full flex flex-col">
                <div className="mx-auto w-full max-w-lg text-center">
                  <h1 className="text-2xl font-bold sm:text-3xl">
                    Create Admin
                  </h1>
                </div>
                <form
                  onSubmit={createHandler}
                  className="mx-auto mt-10 w-full px-8 space-y-7"
                >
                  <div>
                    <div className="relative">
                      <input
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        type="text"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Username"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        type="password"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        type="text"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        type="text"
                        className="border border-white w-full rounded-lg p-4 pe-12 text-sm shadow-sm bg-transparent border-white text-white"
                        placeholder="Address"
                      />
                    </div>
                  </div>

                  <br />

                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="inline-block rounded-lg bg-transparent px-5 py-3 text-sm font-medium text-white border border-white hover:text-gray-400 hover:border-gray-400"
                    >
                      Create Admin
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
