import React, { Component } from 'react';
import './App.css';
import Routes from './routes';

//importing all components
//header
import Header from './components/header';
import Footer from './components/footer';
import Cover from './components/cover';
//hombePage
import Activities from './components/homepage/activities';
import HelpTo from './components/homepage/helpto';
//blog
import BlogCards from './components/blog/cards';
import BlogContainer from './components/blog/container';
import BlogSearch from './components/blog/search';
//contacts
import Contacts from './components/contacts/contacts';
//about
import About from './components/about/about';
//aboutClients
import AboutClients from './components/aboutClients/aboutClients';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Cover />
      <Activities/>
      <HelpTo/>
      <Footer />
      </div>
    );
  }
}

export default App;
