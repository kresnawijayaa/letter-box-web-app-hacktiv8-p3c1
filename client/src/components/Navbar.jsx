import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="bg-gray-800 text-white drop-shadow">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" to="/">
                <span className="sr-only">Home</span>
                <h1 className="bg-gradient-to-r from-orange-400 via-green-600 to-blue-500 bg-clip-text text-xl font-extrabold text-transparent sm:text-3xl">
                  Letter Box.
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
