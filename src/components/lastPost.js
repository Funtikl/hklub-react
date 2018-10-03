import React from "react";

const Lastpost = () => {
  return (
    <div className="card-body">
      <div className="admin">
        <div className="admin-avatar">
          <img
            className="blog_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOm27sGxkaJur2OESDijcOYGwTcpSCXaoleA4p-HoG36jrYXy"
          />
        </div>

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
      </div>
      <a href="1blogcard.html" className="heading">
        <h2>В погоне за ветром</h2>
      </a>
      <p>
        Создайте подзаголовок поста: одно-два предложения, которые кратко
        передают содержание поста и побуждают продолжить чтение. Это текст
        поста. Поделитесь с читателями и потенциальными клиентами интересной и
        полезной информацией по теме.
      </p>
      <hr />
      <small>Просмотров:4</small> <span>&nbsp;</span>
      <small>
        {" "}
        <a href="1blogcard.html" target="_top" className="comment">
          Комментировать
        </a>
      </small>
      <a href="#" className="heart">
        <i className="far fa-heart" />
      </a>
    </div>
  );
};

export default Lastpost;
