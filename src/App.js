
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <Router>
        <Navbar />
        <Header />
          <Route exact path="/"> <Home />
          </Route>

          <Route exact path="/home"> <Home />
          </Route>

          <Route exact path="/webdevelopment"> <Webdevelopment />
          </Route>

          <Route exact path="/contact"> <Contact />
          </Route>
          
        <Footer />
      </Router>
  );
}

export default App;
