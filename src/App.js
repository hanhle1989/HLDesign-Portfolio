
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Header from "./components/Header"

import Home from "./pages/Home";
import WebDevelopment from "./pages/WebDevelopment";
import Contact from './pages/Contact';

function App() {
  return (
      <Router>
        <Navbar />
        <Header />
          <Route exact path="/"> <Home />
          </Route>

          <Route exact path="/Home"> <Home />
          </Route>

          <Route exact path="/WebDevelopment"> <WebDevelopment />
          </Route>

          <Route exact path="/Contact"> <Contact />
          </Route>
          
        <Footer />
      </Router>
  );
}

export default App;
