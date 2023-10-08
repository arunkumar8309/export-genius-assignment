import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import LandingIndex from "./Component/Landing/Index";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<LandingIndex />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
