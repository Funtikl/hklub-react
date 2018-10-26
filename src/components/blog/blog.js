import React from "react";
import Header from "../header";
import Cover from "../cover";
import Footer from "../footer";
import Category from "./category";
import Cards from "./cards";
import {Container, Row, Col} from 'reactstrap';
const Blog = () => {
  return (
    <div>
      <Header />
      <Cover />
      <Container className="blogContainer">
        <Row>
      <Col sm="10" md={{ size: 10, offset: 1 }}>
      <Category />
      <Cards />
       <Cards />
       <Cards />
      </Col>
      </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Blog;
