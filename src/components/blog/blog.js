import React from "react";
import Header from "../header";
import Cover from "../cover";
import Footer from "../footer";
import Category from "./category";
import Cards from "./cards";

const Blog = () => {
  return (
    <div>
      <Header />
      <Cover />
      <Category />
      <Cards />
      <Footer />
    </div>
  );
};

export default Blog;
