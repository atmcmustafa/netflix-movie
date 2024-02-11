import { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { useWindowWidth } from "@react-hook/window-size";
const SimilarMovies = ({ id }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const searchMovie = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=be1b59e50a18452a44eab0956cf0f5b4&language=tr-TR&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data);
    setLoading(false);
  };

  const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { translatY: 20, opacity: 0 },
    visible: {
      translatY: 0,
      opacity: 1,
    },
  };
  const onlyWidth = useWindowWidth();
  useEffect(() => {
    searchMovie();
    window.scrollTo(0, 800);
    if (onlyWidth <= 480) {
      window.scrollTo(0, 700);
    } else {
      window.scrollTo(0, 830);
    }
  }, [page, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-white my-20 mb-0 container mx-auto text-[32px] lg:text-[48px] font-[700] lg:font-[900] px-16 text-center md:text-start">
        Benzer Filmler
      </h2>

      {movies?.results?.length <= 0 ? (
        ""
      ) : (
        <div className="text-white container mx-auto px-16 mt-6 md:mt-0 flex items-center gap-4 md:justify-end justify-center">
          <button
            className={`${page === 1 ? "text-gray-500" : ""}`}
            disabled={page === 1}
            onClick={() => setPage(1)}
          >
            <FiChevronsLeft size={24} />
          </button>
          <button
            className={`${page === 1 ? "text-gray-500" : ""}`}
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <MdOutlineChevronLeft size={24} />
          </button>
          <p className="text-gray-200 text-[20px]">{page}</p>
          <button
            className={`${page === movies?.total_pages ? "text-gray-500" : ""}`}
            disabled={page === movies?.total_pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <MdOutlineChevronRight size={24} />
          </button>
          <button
            className={`${page === movies?.total_pages ? "text-gray-500" : ""}`}
            disabled={page === movies?.total_pages}
            onClick={() =>
              setPage(movies?.total_pages > 500 ? 500 : movies?.total_pages)
            }
          >
            <FiChevronsRight size={24} />
          </button>
        </div>
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mt-8 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-12 md:gap-20 place-items-center px-6 md:px-[5.5rem]"
      >
        {loading ? (
          <p className=" flex items-center justify-center text-xl z-40 text-white">
            Yükleniyor
          </p>
        ) : movies?.results?.length > 0 ? (
          movies?.results?.map((data) => (
            <motion.div
              variants={item}
              key={data.id}
              className="group rounded h-96 w-72 md:w-64 relative overflow-hidden item"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="absolute left-0 top-0 w-full h-full bg-black/60 z-10 "></div>
              {!data.poster_path ? (
                <div className="absolute left-1/2 -translate-x-1/2 w-full top-0 flex items-center justify-center text-xl z-40 text-white">
                  Resim Bulunamadı!
                </div>
              ) : (
                <img
                  className="absolute left-0 top-0 h-full w-full object-cover"
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                  alt={data.title}
                />
              )}
              <div className="absolute inset-0 z-20 text-black p-2 group-hover:mt-[145px] duration-300 mt-[340px] bg-white/60 h-full w-full">
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
            </motion.div>
          ))
        ) : (
          <div className=" mt-2 w-72 flex justify-center md:justify-start ">
            <h2 className="rounded bg-white w-fit  w-72 text-center md:ml-4  py-2 font-bold text-red-500 ">
              Benzer film bulunamadı!
            </h2>
          </div>
        )}
      </motion.div>

      {movies?.results?.length <= 0 ? (
        ""
      ) : (
        <div
          className="text-white container mx-auto px-16 mt-6 pt-6
         md:mt-0 flex items-center gap-4 md:justify-end justify-center"
        >
          <button
            className={`${page === 1 ? "text-gray-500" : ""}`}
            disabled={page === 1}
            onClick={() => setPage(1)}
          >
            <FiChevronsLeft size={24} />
          </button>
          <button
            className={`${page === 1 ? "text-gray-500" : ""}`}
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <MdOutlineChevronLeft size={24} />
          </button>
          <p className="text-gray-200 text-[20px]">{page}</p>
          <button
            className={`${page === movies?.total_pages ? "text-gray-500" : ""}`}
            disabled={page === movies?.total_pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <MdOutlineChevronRight size={24} />
          </button>
          <button
            className={`${page === movies?.total_pages ? "text-gray-500" : ""}`}
            disabled={page === movies?.total_pages}
            onClick={() =>
              setPage(movies?.total_pages > 500 ? 500 : movies?.total_pages)
            }
          >
            <FiChevronsRight size={24} />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default SimilarMovies;
