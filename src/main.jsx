import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "./pages/ResultPage.jsx";
import FilmDetail from "./pages/FilmDetail.jsx";
import Popular from "./pages/Popular.jsx";
import TopRated from "./pages/TopRated.jsx";
import UpComing from "./pages/UpComing.jsx";
import Recommended from "./pages/Recommended.jsx";
import Error from "./pages/Error.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<ResultPage />} path="/results" />
      <Route element={<FilmDetail />} path="/details/:id" />
      <Route element={<Popular />} path="/popular" />
      <Route element={<TopRated />} path="/toprated" />
      <Route element={<UpComing />} path="/upcoming" />
      <Route element={<Recommended />} path="/recommended" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<Error />} path="*" />
    </Routes>

    <Footer />
  </BrowserRouter>
);
