import { Link } from "react-router-dom";
import logo from "/Netflix-Logo.wine.svg";
const Header = () => {
  return (
    <div className=" absolute top-0 w-full z-40">
      <div className="text-white flex justify-between items-center container mx-auto py-6 px-6 md:px-16">
        <span className="h-[2.5rem] w-[9.25rem]">
          <Link to={"/"}>
            <img className="h-[2.5rem] w-[9.25rem]" src={logo} />
          </Link>
        </span>
        <Link to={"/login"}>
          <button className="h-8 w-[100px] bg-[#C11119] rounded font-semibold">
            Oturum Aç
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
