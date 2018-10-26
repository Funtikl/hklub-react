import React, { Component } from "react";
import {Container, Col, Row } from "reactstrap";
//footer is within helpto
import Footer from "../footer";


class HelpTo extends Component {
  render() {
    return (
      <Container className="Helpto">
        <section className="world">
          <div className="container">
            <Row className="row">
              <div className="col-lg-12">
                <h1  className="world_heading">
                  Kimlərə kömək ola bilərsiz
                </h1>
              </div>
            </Row>
            <div className="row">
              <div className="col-lg-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"

                  className="rounded-circle"  />
                <div className="centered">
                  <a href="#">
                    <h3 style={{ color: "white" }}>FOLLOW US</h3>{" "}
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"

                  className="rounded-circle"/>
                <div className="centered">
                  {" "}
                  <a href="#">
                    <h3 style={{ color: "white" }}>FOLLOW US</h3>{" "}
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"

                  className="rounded-circle"/>
                <div  className="centered">
                  <a href="#">
                    <h3 style={{ color: "white" }}>FOLLOW US</h3>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="button_down">
              <button type="button" className="btn btn-light">
                {" "}
                Kateqoriyalara keç
              </button>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default HelpTo;
