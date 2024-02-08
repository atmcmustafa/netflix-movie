import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Result = ({ searchResults }) => {
  return (
    <div>
      <ul className="">
        {searchResults.map((movie) => (
          <Link to={`details/${movie.id}`} key={movie.id}>
            <li className="bg-gray-800 rounded mb-2  h-20 h-full  flex justify-between cursor-pointer">
              <div className="flex flex-col text-start pl-3 justify-center ">
                <div className="flex gap-2 items-center">
                  <span className="text-[20px]">{movie.title}</span>
                  <span className=" text-gray-200 flex gap-1 items-center font-bold">
                    <FaRegStar size={16} color="yellow" />
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
                <span className=" text-gray-400">
                  Çıkış Tarihi: {movie.release_date}
                </span>
              </div>

              <img
                className="w-52 h-32 "
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Result;
