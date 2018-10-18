import React from "react";
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle ,CardButton, } from 'reactstrap';
const Cards = () => {
  return(
    <div>
      <Container className="container blog_card">
                <Row className="row cards">
                        <div className="col-lg-6"><div className="imgcontainer">
      <CardImg src="https://static.wixstatic.com/media/3feb767012964567a364926dbcfee8ea.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/3feb767012964567a364926dbcfee8ea.webp" className="img-fluid"/>
                        <div className="text-block">
                            <div className="admin_container_2">
                                <small><a className="admin" href="#">Admin</a></small>
                                <a href="#"><span>&#x1F451;</span></a>
                                <p><small><span>янв. 8 &#x2027</span><span> 1мин. чтения</span></small><span className="test"></span></p>
                            </div>
                            <div className="text_container">
                                <a className="stories" href="1blogcard.html" ><h2>В погоне за ветром</h2></a>
                                <hr/>
                                <small><i className="fa fa-eye"></i></small><small><span>&nbsp;</span>4</small><span>&nbsp;</span>
                                <small> <a href="#" target="_top" className="commentblog" >Комментировать</a></small>
                                <a href="#" className="heart"><i className="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                <div className="imgcontainer">
        <CardImg src="https://static.wixstatic.com/media/5aa953db070149bf8d4a650d0ea848c9.jpg/v1/fill/w_740,h_495,al_c,q_90,usm_0.66_1.00_0.01/5aa953db070149bf8d4a650d0ea848c9.webp" className="img-fluid"/>
                        <div className="text-block">
                            <div className="admin_container_2">
                                <small><a className="admin" href="#">Admin</a></small>
                                <a href="#"><span>&#x1F451;</span></a>
                                <p><small><span>янв. 8 &#x2027</span><span> 1мин. чтения</span></small><span className="test"></span></p>
                            </div>
                            <div className="text_container">
                                <a className="stories" href="#" ><h2>Лесные трансформации</h2></a>

                                <hr/>
                                <small><i className="fa fa-eye"></i></small><small><span>&nbsp;</span>4</small><span>&nbsp;</span>
                                <small> <a href="#" target="_top" className="commentblog" >Комментировать</a></small>
                                <a href="#" className="heart"><i className="far fa-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
        </Container>
        </div>
)
};

export default Cards;
