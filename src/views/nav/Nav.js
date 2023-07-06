import React from "react";
import "./Navigation.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import {
//   Link, NavLink
// } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
class Nav extends React.Component {

  // state={
  //   isClassActive: false
  // }
  // toggleClassA = () => {
  //   this.setState({
  //       isClassActive:
  //           !this.state.isClassActive
  //   });
  // }
  handleClickClient(){
    let clients = document.getElementById('clients');
  // var services = document.getElementById('services');
    return(
      clients.toggleClass('active')
      (".parent:not(#clients)").toggleClass("invisible")
      );
  }
  render() {
    return (
      <nav className="navigationWrapper">
        <div className="logoWrapper">
          <span className="stylish">TG</span>
          <span className="logo">Cars</span>
        </div>
        <ul className="navigation">
          <li className="parent">
            <a className="link" href="/" exact='true'>
              Home
            </a>
          </li>
          <li className="parent">
            <a className="link" href="/todo">
              About
            </a>
          </li>
          <li className="parent" id="clients">
            <a className="link" href="#home">
              <i className="fas fa-minus"></i> Clients{" "}
              <i className="fas fa-plus"></i>
            </a>
            <ul className="subnavigation">
              <li>
                <a className="link" href="#home">
                  Burger King
                </a>
              </li>
              <li>
                <a className="link" href="#home">
                  Southwest Airlines
                </a>
              </li>
              <li>
                <a className="link" href="#home">
                  Levi Strauss
                </a>
              </li>
            </ul>
          </li>
          <li className="parent" id="services">
            <a className="link" href="#home">
              <i className="fas fa-minus"></i> Services{" "}
              <i className="fas fa-plus"></i>
            </a>
            <ul className="subnavigation">
              <li>
                <a className="link" href="#home">
                  Print Design
                </a>
              </li>
              <li>
                <a className="link" href="#home">
                  Web Design
                </a>
              </li>
              <li>
                <a className="link" href="#home">
                  Mobile App Development
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a className="link" href="/user">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
