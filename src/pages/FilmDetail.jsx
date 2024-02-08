import { useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import SimilarMovies from "../components/SimilarMovies";

const FilmDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=be1b59e50a18452a44eab0956cf0f5b4&language=tr-TR`;
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    searchMovie();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen text-white">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="container mx-auto px-6 md:px-16 relative text-white">
            <div className="relative">
              <div className="absolute inset-0 bg-black/50 z-30"></div>
              {!movie.poster_path ? (
                <div className=" inset-0 flex items-center justify-center z-20 w-full mt-24 h-[450px] object-cover">
                  Yükleniyor...
                </div>
              ) : (
                <img
                  className="w-full mt-24 h-[450px] object-cover"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                />
              )}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-0">
              {movie && (
                <h1 className="text-[32px] lg:text-[48px] font-[700] lg:font-[900] ">
                  {movie?.title}
                </h1>
              )}

              <div className="flex gap-4 items-center">
                {movie && (
                  <span className="border p-1 h-12 justify-center text-xl w-12 flex items-center rounded ml-2 bg-white text-black">
                    {movie?.original_language}
                  </span>
                )}
                <div className="h-12 w-20 flex items-center border rounded bg-white text-black justify-center font-[500]">
                  {movie && <span className="">{movie?.runtime} dk</span>}
                </div>

                {movie && (
                  <span className=" text-gray-200 flex gap-1 items-center font-bold">
                    <FaRegStar size={26} color="yellow" />
                    <span
                      className="text-2xl
                    "
                    >
                      {movie?.vote_average}
                    </span>
                  </span>
                )}
              </div>
              <div className="flex gap-4 flex-wrap items-center">
                {movie?.genres?.map((genre, index) => (
                  <span key={index} className="border p-2 rounded ">
                    {genre.name}
                  </span>
                ))}
              </div>

              {movie && (
                <h3 className="text-[18px] lg:text-[20px] font-[400] md:ml-6 text-gray-400">
                  Çıkış Tarihi: {movie?.release_date}
                </h3>
              )}
            </div>

            <div className="text-gray-400">
              {movie && (
                <h3 className="text-[18px] lg:text-[20px] font-[400] text-gray-400 text-center md:text-left mt-2 md:mt-0">
                  {movie?.tagline}
                </h3>
              )}
            </div>

            {movie && (
              <div className="mt-3 text-center md:text-start">
                <div className="flex ">
                  {movie?.overview?.length > 2 ? (
                    <h2 className="text-[18px] w-full lg:text-[24px] font-[400] md:mr-8 text-center md:text-start mb-4">
                      Özet
                    </h2>
                  ) : (
                    <h2 className="text-[18px] w-full lg:text-[24px] font-[400] md:mr-8 text-center md:text-start mb-4">
                      Özet Bulunamadı!
                    </h2>
                  )}
                </div>
                <p className="md:indent-8">{movie?.overview}</p>
              </div>
            )}
          </div>
          <div className="container mx-auto">
            <SimilarMovies id={id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmDetail;
