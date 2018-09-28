import React, {Component} from 'react';
import Header from '../header';
import Cover from '../cover';
import Footer from '../footer';
import Activities from './activities';
import Helpto from './helpto';
import Lastpost from '../lastPost';

const Homepage = () => {
    return(
      <div>
        <Header />
        <Cover />
        <Lastpost />
        <Activities/>
        <Helpto />
        <Footer />
      </div>
    )
}

export default Homepage;
