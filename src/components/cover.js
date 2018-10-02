import React, { Component } from 'react';
import {Container, Row ,Col, CardImg} from 'reactstrap';
class Cover extends Component {
  render() {
    const styles = {
      coverImg:{position:'relative',
       backgroundSize:'cover',
        backgroundAttachment:'fixed',
         maxHeight:'480px',
       },
      transbox:{
        textAlign: "center",
  backgroundColor: "#ffffff",
  border: "1px solid black",
  opacity: "0.4",
  position: "absolute",
  margin:"auto",
  top: "50px",
  left: "30%",
  height: "250px",
  width: "600px",
  zIndex:'2'
},
card1:{
  position: "relative",
 margin: "auto",
 marginTop: "-60px",
 border: "1px solid darkgrey",
 outlineStyle: "solid",
 outlineColor: "white",
 outlineWidth: "20px",
 backgroundSize: "cover",
 width: "900px",
 backgroundColor: "white",
}
    }
    return (
      <div className="Cover">

<section>
    <Container fluid={true} className="container">
        <Row className="row">
            <Col xs='12'>
            <div className="content">
                        <div className="transbox" style={styles.transbox}>
                            <h1 className="sitename"> Həmrəylik Klubu</h1>
                            <h4><i> Güc birlikdədir</i></h4>
                        </div>
                    </div>
            <CardImg style={styles.coverImg} src="https://static1.squarespace.com/static/579e4df5b8a79bb7da5a70e1/t/57c7a05559cc68833fbee7f6/1472700675272/14138028_10207349694396373_5736626457680045716_o.jpg"/>
                <div className="card1" style={styles.card1}>

                    <img src="https://static.wixstatic.com/media/3feb767012964567a364926dbcfee8ea.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/3feb767012964567a364926dbcfee8ea.jpg"  className="img-border img-full" alt="Card image cap" />

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
