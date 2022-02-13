import React, { useState } from "react";
import { Search } from "react-feather";
import Carousel from "./Home/Carousel";
// import "./Home.css";

const Home = () => {
  const [medium, setState] = useState();
  return (
    <>
      <Carousel />
    </>
  );
};

export default Home;
