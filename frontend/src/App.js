import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AboutUs from "./components/about_us/about_us";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";
import Quote from "./components/quote/quote";
import Home from "./components/home/home";
import logo from "./images/zephyr_transparent.png";

export default function App() {
  return (
    <Router>
      <header>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" height="120px" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/quote">Get a Quote</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
