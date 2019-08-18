import React, { Component } from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
import Footer from "../components/Footer";
import "../styles/main.scss";

export class LandingLayout extends Component {

  static defaultProps = {
    headerIsFixed:false,
    headerIsMonochrome:false,
    changeStyleOnScroll:false
  }

  constructor(props) {
    super(props)
    this.title = this.props.title || "Let's Use Only Reusable"
  }
  

  render() {
    var {headerIsFixed, headerIsMonochrome, changeStyleOnScroll} = this.props
    return (
      <div className={`landingTemplate ${this.props.PageClass}`}>
          <Meta />
          <Header
            isFixed={headerIsFixed}
            changeStyleOnScroll  = {changeStyleOnScroll}
            changeStyleOnScrollHeight = {200}
            changeStyleOnScrollClass="--white"
            className={headerIsMonochrome?"":"--white"}
          />
          <div>{this.props.children}</div>
          <Footer />
      </div>
    );
  }
}

export default LandingLayout;
