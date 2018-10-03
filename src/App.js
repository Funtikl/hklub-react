import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

//importing all components
import Homepage from "./components/homepage/homepage";
import Blog from "./components/blog/blog";
import Contacts from "./components/contacts/contacts";
import About from "./components/about/about";
import AboutClients from "./components/aboutClients/aboutClients";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/aboutclients" component={AboutClients} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
