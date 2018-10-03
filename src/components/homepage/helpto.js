import React, { Component } from "react";
import { Col, Row } from "reactstrap";
//footer is within helpto
import Footer from "../footer";

const styles = {
  world: {
    position: "relative",
    margin: "auto",
    width: "950px"
  },
  world_heading: {
    fontSize: "50px",
    padding: "40px",
    marginLeft: "15%"
  },
  rounded: {
    height: "300px",
    minWidth: "300px"
  },
  centered: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

class HelpTo extends Component {
  render() {
    return (
      <div className="Helpto">
        <section style={styles.world} className="world">
          <div className="container">
            <Row className="row">
              <div className="col-lg-12">
                <h1 style={styles.world_heading} className="world_heading">
                  Kimlərə kömək ola bilərsiz
                </h1>
              </div>
            </Row>
            <div className="row">
              <div className="col-lg-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
                  style={styles.rounded}
                  className="rounded-circle"
                />
                <div style={styles.centered} className="centered">
                  <a href="#">
                    <h3 style={{ color: "white" }}>FOLLOW US</h3>{" "}
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
                  style={styles.rounded}
                  className="rounded-circle"
                />
                <div style={styles.centered} className="centered">
                  {" "}
                  <a href="#">
                    <h3 style={{ color: "white" }}>FOLLOW US</h3>{" "}
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"
                  style={styles.rounded}
                  className="rounded-circle"
                />
                <div style={styles.centered} className="centered">
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
      </div>
    );
  }
}

export default HelpTo;
