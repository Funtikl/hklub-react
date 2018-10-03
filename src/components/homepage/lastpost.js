import React from "react";
import { Card, CardImg } from "reactstrap";

const styles = {
  card1: {
    position: "relative",
    margin: "auto",
    marginTop: "-60px",
    border: "1px solid darkgrey",
    outlineStyle: "solid",
    outlineColor: "white",
    outlineWidth: "20px",
    backgroundSize: "cover",
    width: "900px",
    backgroundColor: "white"
  },
  imgFull: {
    minWidth: "100%",
    height: "400px"
  }
};

const Lastpost = () => {
  return (
    <Card className="card1" style={styles.card1}>
      <img
        style={styles.imgFull}
        src="https://static.wixstatic.com/media/3feb767012964567a364926dbcfee8ea.jpg/v1/fill/w_740,h_493,al_c,q_90,usm_0.66_1.00_0.01/3feb767012964567a364926dbcfee8ea.jpg"
        className="img-border img-full"
        alt="Card image cap"
      />
      <div class="admin_container">
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
