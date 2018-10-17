import React, { Component } from "react";
import Header from "../header";
import Lastpost from "./lastpost";
import Cover from "../cover";
import Footer from "../footer";
import Helpto from "./helpto";
import Carousels from "./carousel";
import Transbox from "./transbox";
const Homepage = () => {
  return (
    <div>
      <Header />
      <Cover />
      <Lastpost />
      <h2 className="carousel_header" style={{ fontSize:" 50px",
    padding:"10px",
          marginLeft:"480px"}}>Fəaliyyət</h2>
      <Carousels />
      <Transbox />
      <Helpto />
      <Footer />
    </div>
  );
};

export default Homepage;
