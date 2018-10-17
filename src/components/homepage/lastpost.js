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
       <a href="1blogcard.html" class="heading"><h2>В погоне за ветром</h2></a>
                        <p>Создайте подзаголовок поста: одно-два предложения, которые кратко передают содержание поста и побуждают продолжить чтение. Это текст поста. Поделитесь с читателями и потенциальными клиентами интересной и полезной информацией по теме.</p>
                        <hr/>
                        <small>Просмотров:4</small> <span>&nbsp;</span>
                        <small> <a href="1blogcard.html" target="_top" class="comment">Комментировать</a></small>
                        <a href="#" class="heart"><i class="far fa-heart"></i></a>
      </div>
    </Card>
  );
};

export default Lastpost;
