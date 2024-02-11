import { useEffect, useState } from "react";
import HomeTV from "../components/HomeTV";
import SearchResultsPage from "./Results";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <title>Ana Sayfa</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white"
      >
        <div className="h-[700px] relative border-b-8 border-[#232323] ">
          <div className="text-white background-banner ">
            <div className="absolute left-0 top-0 w-full h-full bg-black/40 z-10"></div>
            <div className="z-20 text-white relative flex items-center  justify-center h-full">
              <div className="text-center flex flex-col gap-2 container mx-auto px-6 lg:px-0">
                <h1 className="text-[32px] lg:text-[48px] font-[700] lg:font-[900]">
                  Sinemanın Büyülü Dünyasına Hoş Geldiniz!
                </h1>
                <h2 className="text-[18px] lg:text-[24px] font-[400]">
                  Burada, her zevke ve tercihe uygun bir film bulabilirsiniz;
                  unutulmaz anların kapılarını aralayacak, sizi düşündürecek ve
                  eğlendirecek bir seçki sizleri bekliyor!
                </h2>
                <h3 className="text-[18px] lg:text-[20px] font-[400]">
                  Hemen aramaya başla!
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
          title={"Trendlerin Kralı: Popüler Filmler"}
          paragraph={
            "Bu kategoride, şu anda popüler olan ve dünyada heyecan yaratan en çarpıcı filmleri bulabilirsiniz. Sinemanın nabzını tutun!"
          }
          CategoryName={"Popüler"}
          link={"/popular"}
        />

        <HomeTV
          flexDirection={"md:flex-row-reverse "}
          image={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          }
          title={"Sahnede Parlayanlar: Yakın Zamanda Vizyona Girenler"}
          paragraph={
            "Bu kategoride, henüz yeni gösterime girmiş ve dikkat çeken en son filmleri keşfedin. Sinemanın yeni yıldızları burada!"
          }
          CategoryName={"En Son "}
          link={"/upcoming"}
        />
        <HomeTV
          image={
            "	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          }
          title={"Halkın Seçimi: En Çok Oylanan Filmler"}
          paragraph={
            "Bu kategoride, izleyiciler tarafından yüksek puan alan ve büyük beğeni toplayan filmleri bulabilirsiniz. Topluluğun favorileri burada!"
          }
          CategoryName={"En Çok Oylanan"}
          link={"/toprated"}
        />
        <HomeTV
          flexDirection={"md:flex-row-reverse "}
          image={
            "https://occ-0-4451-1432.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABf9FUgiWN4GTIJexNEV8ZW_SPzGYmxKo7TaBfIoriNNfn85AMMEcvM61PwQ-NhPzGXz2qu53lDDcCuf0rH9FWOYBpvhUc2dQxIAQ.png?r=533"
          }
          title={"Önerilen Filmler"}
          paragraph={
            "Bu kategoride, kişisel beğenileriniz ve tercihleriniz doğrultusunda özenle seçilmiş filmleri bulabilirsiniz. Size özel öneriler burada!"
          }
          CategoryName={"Öneriler"}
          link={"/recommended"}
        />
      </motion.div>
    </>
  );
};

export default Home;
