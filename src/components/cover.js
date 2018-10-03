import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
class Cover extends Component {
  render() {

    return (
      <div className="content">
        <section>
          <Container fluid={true} className="container">
            <Row className="row">
              <Col xs="12">
                <div className="content">
                  <div className="transbox">
                    <h1 className="sitename"> Həmrəylik Klubu</h1>
                    <h4>
                      <i> Güc birlikdədir</i>
                    </h4>
                  </div>
                </div>

              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Cover;
