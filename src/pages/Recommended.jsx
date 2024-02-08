import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Recommended = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/502356/recommendations?api_key=be1b59e50a18452a44eab0956cf0f5b4&language=tr-TR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <div className="">
      <h2 className="text-white my-20 mb-0 container mx-auto text-[32px] lg:text-[48px] font-[700] lg:font-[900] px-16 text-center md:text-start">
        Önerilen
      </h2>
      <div className="mt-12 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-20 place-items-center px-6 md:px-[5.5rem]">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="loader"></div>
          </div>
        ) : (
          movies.map((data) => (
            <div
              key={data.id}
              className="group rounded bg-red-500 h-96 w-64 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 w-full h-full bg-black/60 z-10 "></div>
              {!data.poster_path ? (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  Yükleniyor...
                </div>
              ) : (
                <img
                  className="absolute left-0 top-0 h-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  alt={data.title}
                />
              )}
              <div className="absolute inset-0 z-20 text-black p-2 group-hover:mt-[100px] duration-300 mt-[340px] bg-white/60 h-full w-full">
                <div className="flex gap-4 items-center relative">
                  <h3 className="text-[18px] line-clamp-1 lg:text-[24px] font-[700]">
                    {data.title}
                  </h3>
                  <span className=" flex gap-1 items-center justify-between font-bold">
                    <FaRegStar size={24} color="yellow" />
                    <span className="text-2xl">{data.vote_average}</span>
                  </span>
                </div>
                <p className="line-clamp-6 text-black indent-4">
                  {data.overview}
                </p>
                <Link
                  to={`/details/${data.id}`}
                  className="h-8  px-3 py-1 bg-[#C11119] text-white rounded font-semibold mt-4 flex items-center justify-center w-full"
                >
                  Filme Git
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recommended;
