import React from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import Header from './components/header';

export default () => {
  <BrowserRouter>
    <Route path="/home" exact component={Header} />
  </BrowserRouter>
}
