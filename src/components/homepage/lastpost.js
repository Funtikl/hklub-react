import React from "react";
import { Card, CardImg } from "reactstrap";



const Lastpost = () => {
  return (
    <Card className="card1" >
      <img

        src="https://static.wixstatic.com/media/3feb767012964567a364926dbcfee8ea.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/3feb767012964567a364926dbcfee8ea.jpg"
        className="img-border img-full"
        alt="Card image cap"/>
      <div className="admin_container">
        <small>
          <a className="admin" href="#">
            Admin
          </a>
        </small>
        <a className="admin_img" href="#">
          <span>&#x1F451;</span>
        </a>
        <p>
          <small>
            <span>янв. 8 &#x2027</span>
            <span> 1мин. чтения</span>
          </small>
        </p>
      </div>
    </Card>
  );
};

export default Lastpost;
