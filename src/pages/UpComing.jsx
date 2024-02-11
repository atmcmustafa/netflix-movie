import MovieGrid from "../components/MovieGrid";

const UpComing = () => {
  return (
    <MovieGrid
      api={
        "https://api.themoviedb.org/3/movie/upcoming?api_key=be1b59e50a18452a44eab0956cf0f5b4&language=tr-TR"
      }
      header={"Yakın Zamanda Vizyona Girenler"}
    />
  );
};

export default UpComing;
