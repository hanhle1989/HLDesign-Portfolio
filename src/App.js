
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header"

import Home from "./pages/home";
import Webdevelopment from "./pages/webdevelopment";
import Contact from './pages/contact';

function App() {
  return (
    <HashRouter basename={process.env.hldesigns}>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/webdevelopment" component={Webdevelopment} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
