import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";

const About = () => {
  return (
    <div>
      <Header  />
      <div className="About">
        <div className="container">
          <div className="card1 blog_top">
            <div className="contact_container">
              <div className="container contact_heading">
                <h3>ОБО МНЕ</h3>
              </div>
              <div className="container album_div">
                <p>
                  Это текст. Нажмите один раз и выберите «Редактировать текст»
                  или просто кликните дважды, чтобы добавить свой текст и
                  настроить шрифт. Вы можете переместить его в любое место на
                  странице. Расскажите посетителям сайта о себе. Здесь будет
                  удачно смотреться текст о вашей компании и услугах.
                </p>
                <img
                  className="about_img"
                  src="https://static.wixstatic.com/media/a38016_a60ff8e4291d4fcfb911b5ba0237b6c1.jpg/v1/fill/w_315,h_285,al_c,q_80,usm_0.66_1.00_0.01/a38016_a60ff8e4291d4fcfb911b5ba0237b6c1.webp"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
