import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
class Cover extends Component {
  render() {
    const styles = {
      coverImg: {
        position: "relative",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        maxHeight: "480px"
      },
      transbox: {
        textAlign: "center",
        backgroundColor: "#ffffff",
        border: "1px solid black",
        opacity: "0.4",
        position: "absolute",
        margin: "auto",
        top: "50px",
        left: "30%",
        height: "250px",
        width: "600px",
        zIndex: "2"
      }
    };
    return (
      <div className="Cover">
        <section>
          <Container fluid={true} className="container">
            <Row className="row">
              <Col xs="12">
                <div className="content">
                  <div className="transbox" style={styles.transbox}>
                    <h1 className="sitename"> Həmrəylik Klubu</h1>
                    <h4>
                      <i> Güc birlikdədir</i>
                    </h4>
                  </div>
                </div>
                <CardImg
                  style={styles.coverImg}
                  src="https://static1.squarespace.com/static/579e4df5b8a79bb7da5a70e1/t/57c7a05559cc68833fbee7f6/1472700675272/14138028_10207349694396373_5736626457680045716_o.jpg"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Cover;
