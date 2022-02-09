import React, { useState } from "react";
import { Search } from "react-feather";
import Carousel from "./Home/Carousel";
// import "./Home.css";
import Unsplash, { createApi } from "unsplash-js";

const Home = () => {
  const unsplash = createApi({
    accessKey: "OjKLVNBzevtX2EKTHPzIk7YF8xC2iXjc-Is_XXh6tx0",
  });
  const [medium, setState] = useState();
  return <Carousel />;
};

export default Home;
