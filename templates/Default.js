import React, { Component } from "react";
import Head from "next/head";
import Header from "../components/Header";
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
        <Head>
          <title>{this.title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* Twitter Opengraph */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@oxyncommunity" />
          <meta name="twitter:creator" content="@oxyncommunity" />
          <meta
            name="twitter:title"
            content="Oxyn - Blockchain for the Green Community"
          />
          <meta
            name="twitter:description"
            content="Get oxyns from $9.99 we will  plant trees for you in National Forests of the United States"
          />
          <meta
            name="twitter:image"
            content="https://s3-us-west-1.amazonaws.com/files.oxyn.io/cover.png"
          />

          <meta
            property="og:title"
            content="Oxyn - Blockchain for the Green Community"
          />
          <meta property="og:url" content="https://oxyn.io" />
          <meta
            property="og:image"
            content="https://s3-us-west-1.amazonaws.com/files.oxyn.io/cover.png"
          />
          <meta property="og:image" content="image-1200x600.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="600" />

          <meta
            property="og:site_name"
            content="Oxyn - Blockchain for the Green Community"
          />
          <meta
            property="og:description"
            content="Get oxyns from $9.99 we will  plant trees for you in National Forests of the United States"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/images/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/images/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/images/favicons/favicon-16x16.png"
          />
          <link
            rel="manifest"
            href="/static/images/favicons/site.webmanifest"
          />
          <link
            rel="mask-icon"
            href="/static/images/favicons/safari-pinned-tab.svg"
            color="#84DD72"
          />
          <link
            rel="shortcut icon"
            href="/static/images/favicons/favicon.ico"
          />
          <meta name="msapplication-TileColor" content="#84dd72" />
          <meta
            name="msapplication-config"
            content="static/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
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
