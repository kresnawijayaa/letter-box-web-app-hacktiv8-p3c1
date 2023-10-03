import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    delete localStorage.access_token;
    navigate("/login");
  };
  return (
    <>
      <header className="bg-gray-800 text-white drop-shadow">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <h1 className="bg-gradient-to-r from-orange-400 via-green-600 to-blue-500 bg-clip-text text-xl font-extrabold text-transparent sm:text-3xl">
                  Letter Box.
                </h1>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-md">
                  <li>
                    <Link
                      className="text-gray-100 transition hover:text-gray-100/75"
                      to="/"
                    >
                      Movie
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-100 transition hover:text-gray-100/75"
                      to="/genre"
                    >
                      Genre
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-100 transition hover:text-gray-100/75"
                      to="/admin"
                    >
                      Admin
                    </Link>
                  </li>

                  <button
                    onClick={handleLogout}
                    className="justify-self-end inline-flex items-center gap-2 rounded border border-white px-6 py-2 text-white hover:text-gray-400 hover:border-gray-400"
                  >
                    <span className="text-sm font-normal"> Logout </span>
                  </button>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
