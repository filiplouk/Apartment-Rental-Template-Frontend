import React from "react";
import Header from "../partials/Header";
import Properties from "./Properties";
import Filters from "./Filters";
import Footer from "../partials/Footer";

function Home() {
  return (
    <div>
      <Header />
      <div className="row content">
        <div className="col-lg-4 d-none d-lg-block">
          <Filters />
        </div>
        <div className="col-lg-8 col-md-12">
          <Properties />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
