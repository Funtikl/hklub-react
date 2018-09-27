import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

//importing all components
//hombePage
import Homepage from './components/homepage/homepage';
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
    <BrowserRouter>
    <Switch>
    <Route path="/home" component={Homepage} />
    </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
