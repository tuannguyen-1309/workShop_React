import React from "react";
import Support from "../../../components/Support";
import Banner from "../../../components/Banner";
import NewProductHome from "./components/NewProductHome";
import GalleryHome from "./components/GalleryHome";
import NewsHome from "./components/NewsHome";

const HomePage = () => {
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* New Products */}
      <NewProductHome />
      {/* Gallery */}
      <GalleryHome />
      {/* News */}
      <NewsHome />
      {/* phần cuối */}
      <Support />
    </div>
  );
};

export default HomePage;
