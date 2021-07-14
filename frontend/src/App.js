import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AboutUs from "./components/about_us/about_us";
import Projects from "./components/projects/projects";
import Quote from "./components/quote/quote";
import Home from "./components/home/home";
import Contact from "./components/contact_us/contact_us";
import logo from "./images/zephyr_transparent.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import mail from "./images/mail.png";
import phone from "./images/phone.png";

export default function App() {
  return (
    <Router>
      <header>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" height="90px" />
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
                <Link to="/contact">Contact us</Link>
              </li>
              <button>
                <Link to="/quote">Get a Quote</Link>
              </button>
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
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div>
        <footer>
          <table className="table">
            <tr>
              <td className="footer-left">
                <img src={logo} alt="logo" height="150px" />

                <tr>
                  <td>
                    <img src={phone} alt="phone" className="icon" />
                  </td>
                  <td>+316 12345678</td>
                </tr>
                <tr>
                  <td>
                    <img src={mail} alt="mail" className="icon" />
                  </td>
                  <td>subject@to.change</td>
                </tr>
              </td>
              <td className="footer-right">
                <tr>
                  <td>
                    <p>
                      <Link to="/about" className="footer-nav">
                        About us
                      </Link>
                    </p>
                    <p>
                      <Link to="/projects" className="footer-nav">
                        Projects
                      </Link>
                    </p>
                    <p>
                      <Link to="/quote" className="footer-nav">
                        Get a quote
                      </Link>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>
                    <p>Follow us:</p>
                    <a href="https://instagram.com" target="blank">
                      <img src={instagram} alt="instagram" className="icon" />
                    </a>
                    <a href="https://twitter.com" target="blank">
                      <img src={twitter} alt="twitter" className="icon" />
                    </a>
                    <a href="https://facebook.com" target="blank">
                      <img src={facebook} alt="facebook" className="icon" />
                    </a>
                  </td>
                </tr>
              </td>
            </tr>
          </table>
        </footer>
      </div>
    </Router>
  );
}
