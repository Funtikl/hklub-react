import React, {Component} from 'react';
import Header from '../header';
import Cover from '../cover';
import Footer from '../footer';

class Homepage extends Component{
  render(){
    return(
      <div>
        <Header />
        <Cover />
        <Footer />
      </div>
    )
  }
}

export default Homepage;
