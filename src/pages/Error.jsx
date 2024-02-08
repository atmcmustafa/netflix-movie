import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <h2 className="text-3xl text-center text-white font-bold">
        404 Not Found!
      </h2>
      <Link
        className="text-white mt-6 rounded flex bg-green-500 h-10 w-24 font-bold text-center items-center justify-center"
        to={"/"}
      >
        Geri Dön
      </Link>
    </div>
  );
};

export default Error;
