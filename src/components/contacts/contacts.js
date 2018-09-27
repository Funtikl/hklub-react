import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
      <Header />
      <div className="container">
    <div className="card1 blog_top">

        <div className="contact_container" >
            <div className="container contact_heading">
                <h3>БУДЕМ НА СВЯЗИ</h3>
            </div>
            <div className="container contact_heading">
                <div className="information_row">
                    <p> <b>Максим Чернышов</b> <span className="information_row_span"> ул. Арбат, 1а, Москва, Россия </span> <a className="admin_img" href="#">info@mysite.ru</a>.</p>
                </div>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control contact_borders" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control contact_borders" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control contact_borders"  rows="5" placeholder="Message"></textarea>
                    </div>
                    <button type="button" className="btn btn-dark float-right contact_button">Send</button>
                </form>
            </div>
        </div>

        </div>
    </div>
    <Footer />
      </div>
    );
  }
}

export default Contacts;
