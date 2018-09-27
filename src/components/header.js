import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <div className="Haeder">
      <header className="homepage_top">
              <ul className="nav justify-content-center">
                  <li className="nav-item">
                      <a className="nav-link active" href="homepage.html">Main</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="blog.html">Blog</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="aboutme.html">About Us</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" href="albumclients.html">Album Clients</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="contacts.html">Contacts</a>
                  </li>
              </ul>
</header>
<div className="content">
            <div className="transbox">
                <h1 className="sitename"> Həmrəylik Klubu</h1>
                <h4><i> Güc birlikdədir</i></h4>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
