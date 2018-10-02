import React, { Component } from 'react';
//footer is within helpto
import Footer from '../footer';
class HelpTo extends Component {
  render() {
    return (
      <div className="Helpto">
      <section  className="world">
    <div className="container">
        <div className="row">
            <div className="col-lg-12"><h1 className="world_heading">Kimlərə kömək ola bilərsiz</h1></div>
        </div>
        <div className="row">
            <div className="col-lg-4" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" className="rounded-circle" />
                <div className="centered"><a href="#"><h3>FOLLOW US</h3> </a></div>
            </div>
            <div className="col-lg-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" className="rounded-circle" />
                <div className="centered"> <a href="#"><h3>FOLLOW US</h3> </a></div>
            </div>
            <div className="col-lg-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" className="rounded-circle" />
                <div className="centered"><a href="#"><h3>FOLLOW US</h3> </a></div>
            </div>
        </div>

                <div className="button_down">
                    <button type="button" className="btn btn-light"> Kateqoriyalara keç</button>
                </div>
        </div>

</section>
      </div>
    );
  }
}

export default HelpTo;
