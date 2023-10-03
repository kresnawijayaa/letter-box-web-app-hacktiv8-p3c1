import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-900">
        <img
          src="https://img.freepik.com/premium-photo/magnifier-glass-with-red-triangle-caution-warning-sign-laptop-computer-keyboard-notification-error-maintenance-technology-exclamation-concept_50039-4613.jpg?w=740"
          alt=""
          className="object-cover w-[800px] h-80 mx-auto mt-20"
        />

        <div className="flex items-center justify-center flex-1">
          <div className="max-w-xl px-4 py-8 mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
              We can't find that page.
            </h1>

            <p className="mt-4 text-gray-100">
              Try searching again, or return home to start from the beginning.
            </p>

            <Link to="/">
              <button className="mt-6 justify-self-end inline-flex items-center gap-2 rounded border border-white px-6 py-2 text-white hover:text-gray-400 hover:border-gray-400">
                <span className="text-sm font-normal"> Back to Home </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
