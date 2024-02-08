import { useEffect, useState } from "react";
import HomeTV from "../components/HomeTV";
import SearchResultsPage from "./Results";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchMovie = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=be1b59e50a18452a44eab0956cf0f5b4&language=tr-TR&query=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    setShowSearchResults(true);
  };

  useEffect(() => {
    if (query.trim() !== "") {
      searchMovie();
    }
    if (query === "") {
      setMovies([]);
    }
  }, [query]);

  return (
    <div className="text-white">
      <div className="h-[700px] relative border-b-8 border-[#232323] ">
        <div className="text-white background-banner ">
          <div className="absolute left-0 top-0 w-full h-full bg-black/40 z-10"></div>
          <div className="z-20 text-white relative flex items-center  justify-center h-full">
            <div className="text-center flex flex-col gap-2 container mx-auto px-6 lg:px-0">
              <h1 className="text-[32px] lg:text-[48px] font-[700] lg:font-[900]">
                Unlimited movies, TV shows, and more
              </h1>
              <h2 className="text-[18px] lg:text-[24px] font-[400]">
                Watch anywhere. Cancel anytime.
              </h2>
              <h3 className="text-[18px] lg:text-[20px] font-[400]">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="flex gap-2 items-center justify-center w-full">
                <div className="relative w-full md:w-auto">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Aradığınız film"
                    type="text"
                    className="border h-[56px] w-full md:w-[500px] outline-none rounded bg-[#100F0F]  border-[#808080b3] p-4"
                  />
                  <div className="absolute left-0 mx-auto bg-black">
                    {showSearchResults && (
                      <SearchResultsPage searchResults={movies} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <HomeTV
        image={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        }
        title={"Enjoy on your TV"}
        paragraph={
          "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        }
        CategoryName={"Popüler"}
        link={"/popular"}
      />

      <HomeTV
        flexDirection={"md:flex-row-reverse "}
        image={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        }
        title={"Enjoy on your TV"}
        paragraph={"Download your shows to watch offline."}
        CategoryName={"Yakında"}
        link={"/upcoming"}
      />
      <HomeTV
        image={
          "	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        }
        title={"Watch everywhere"}
        paragraph={
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        }
        CategoryName={"En Çok Oylanan"}
        link={"/toprated"}
      />
      <HomeTV
        flexDirection={"md:flex-row-reverse "}
        image={
          "https://occ-0-4451-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABf9FUgiWN4GTIJexNEV8ZW_SPzGYmxKo7TaBfIoriNNfn85AMMEcvM61PwQ-NhPzGXz2qu53lDDcCuf0rH9FWOYBpvhUc2dQxIAQ.png?r=533"
        }
        title={"Create profiles for kids"}
        paragraph={
          "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        }
        CategoryName={"Öneriler"}
        link={"/recommended"}
      />
    </div>
  );
};

export default Home;
