import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="blog_footer">
          <footer className="page-footer">
            <div>
              <div className="row">
                <div className="col-lg-12 hr_footer">
                  <hr />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4">
                  <form>
                    <div className="form-inline">
                      <p> Подпишитесь на рассылку </p>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="укажите ваш эл. почту"
                      />
                      <button className="btn submit" type="button">
                        Подписаться
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-4 ">
                  <ul className="address-top-menu">
                    <li>
                      <a href="https://vk.com/">
                        <i className="fab fa-vk" />
                      </a>
                      <a href="https://www.facebook.com/wix">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="https://twitter.com/wix">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.instagram.com/wix/">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://www.pinterest.com/wixcom/">
                        <i className="fab fa-pinterest" />
                      </a>
                    </li>
                  </ul>
                  <p>
                    © 2023 «Человек с камерой».Сайт создан на{" "}
                    <a
                      className="admin_img"
                      href="https://ru.wix.com/?utm_campaign=vir_created_with"
                    >
                      Wix.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
