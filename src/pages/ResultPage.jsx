import Result from "./Results";

const ResultPage = ({ results }) => {
  return (
    <div>
      <h1>Search Results</h1>
      <Result results={results} />
    </div>
  );
};

export default ResultPage;
