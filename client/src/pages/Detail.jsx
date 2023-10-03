import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../store/actionCreator";
import { useParams } from "react-router-dom";
import Cast from "../components/Cast";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const { detail } = useSelector((state) => state);
  const { slug } = useParams();
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      setLoading(true);
      await dispatch(fetchMovieDetail(slug));
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
      <section className="bg-gray-900 text-white">
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
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-8 sm:px-6 lg:py-12 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-7 lg:gap-16">
              <div className="col-span-2">
                <img
                  src={detail.imgUrl}
                  alt=""
                  className="rounded-lg h-[160px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[480px]"
                />
              </div>

              <div className="col-span-3 h-400">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  {detail.title}
                </h2>
                <p className="text-lg font-normal mt-4 text-gray-400">
                  ⭐ {detail.rating}
                  <span className="text-xs">/ 5</span> 🍿 {detail?.Genre?.name}
                </p>
                <p className="mt-4 text-gray-400 leading-relaxed line-clamp-5">
                  {detail.synopsis}
                </p>
                <br />

                <a
                  href={detail.trailerUrl}
                  target="blank"
                  className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FF3D00"
                      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                    ></path>
                    <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                  </svg>
                  <span className="ml-4 w-full">Watch movie trailer here</span>
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>

              <div className="col-span-2">
                <h2 className="text-xl font-medium sm:text-2xl py-2">
                  🎬 Cast
                </h2>

                <div className="grid grid-cols-1 gap-2">
                  {detail?.Casts?.map((cast) => {
                    return <Cast key={cast.id} cast={cast} />;
                  })}
                </div>
                <br />
                <br />
                <h2 className="text-xl font-medium sm:text-2xl py-2">
                  🎬 Author
                </h2>

                <div className="mt-4 inline-flex items-center justify-center p-4 text-base font-normal text-white rounded-lg bg-transparent border border-white">
                  <span className="mx-4 w-full">{detail.User.email}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
