import React from 'react';
import Header from '../header';
import Cover from '../cover';
import Footer from '../footer';

const AboutClients = () => {

    return (
      <div className="aboutClients">
      <Header />
      <Cover />
      <div className="container">
  <div className="card1 blog_top">

      <div className="contact_container">
          <div className="container contact_heading">
              <h3>ФОТОАЛЬБОМЫ КЛИЕНТОВ</h3>
          </div>
          <div className="container album_div">
                <p>
                    Произведите впечатление на клиентов, создав сайт-альбом. Это легко!
                </p>
          </div>
      </div>

  </div>
</div>
  <Footer />
      </div>
    )
}

export default AboutClients;
