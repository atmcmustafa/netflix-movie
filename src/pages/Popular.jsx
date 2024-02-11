import MovieGrid from "../components/MovieGrid";

const Popular = () => {
  return (
    <MovieGrid
      api={`https://api.themoviedb.org/3/movie/popular?api_key=be1b59e50a18452a44eab0956cf0f5b4&language=tr-TR`}
      header={"Popüler"}
    />
  );
};

export default Popular;
