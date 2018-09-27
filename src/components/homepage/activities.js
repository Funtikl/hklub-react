import React, { Component } from 'react';


class Activities extends Component {
  render() {
    return (
      <div>
      <section>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="carousel_header"> Fəaliyyət</h1>
                <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{width: "950px"}}>

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img className="d-block w-100" src="http://www.musavat.az/wp-content/uploads/2016/06/mod-93925.jpg.jpg" alt="First slide" />
            <div className="transbox_carousel">
                <div className="carousel_boxes">
                    <h1 >WEDDINGS</h1>
                    <b>&#x2015;</b>
                    <p>AND MORE
                        Describe what you offer here. add a few choice words and a stunning pic to tantalize your audience and leave them hungry for more.</p>
                    <button className="carousel_button">Click me!</button>
                </div>
            </div>
        </div>

        <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0250/1496/products/Sl1_1458542611_1024x1024.jpg?v=1482496548" alt="Second slide" />
            <div className="transbox_carousel">
                <div className="carousel_boxes">
                    <h1 >PARTIES</h1>
                    <b>&#x2015;</b>
                    <p>AND MORE
                        Describe what you offer here. add a few choice words and a stunning pic to tantalize your audience and leave them hungry for more.</p>
                    <button className="carousel_button">Click Me</button>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            <img className="d-block w-100" src="http://www.strangehistory.net/blog/wp-content/uploads/2013/11/sweets.jpg" alt="Third slide" />
            <div className="transbox_carousel">
                <div className="carousel_boxes">
                    <h1 >AND MORE</h1>
                    <b>&#x2015;</b>
                    <p>AND MORE
                        Describe what you offer here. add a few choice words and a stunning pic to tantalize your audience and leave them hungry for more.</p>
                    <button className="carousel_button">Click me!</button>
                </div>
            </div>
        </div>
    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
      </div>
    );
  }
}

export default Activities;
