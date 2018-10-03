import React, { Component } from "react";
import Header from "../header";
import Lastpost from "./lastpost";
import Cover from "../cover";
import Footer from "../footer";
import Helpto from "./helpto";
import Carousels from "./carousel";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Cover />
      <Lastpost />
      <Carousels />
      <Helpto />
      <Footer />
    </div>
  );
};

export default Homepage;
