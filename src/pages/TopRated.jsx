import MovieGrid from "../components/MovieGrid";

const TopRated = () => {
  return (
    <MovieGrid
      api={
        "https://api.themoviedb.org/3/movie/top_rated?api_key=be1b59e50a18452a44eab0956cf0f5b4&language=tr-TR"
      }
      header={"En Çok Oylanan"}
    />
  );
};

export default TopRated;
