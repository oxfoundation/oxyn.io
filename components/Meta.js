import React, { Component } from "react";
import Head from "next/head";


export default class Meta extends Component {



  constructor(props) {
    super(props);
    this.title = this.props.title || "Let's re-use. Blockchain against plastic";
    this.shareTitle = "After use send product packages back and get money!" 
    this.shareDescription = "Cryptocurrency and blockchain ecosystem which allows you effortlessly to send packages back to the manufacturer for re-use or recycling purposes."
    this.shareImageTwitter = "https://oxyn.io/static/images/share/shareFacebook.png"
    this.shareImageFacebook = "https://oxyn.io/static/images/share/shareTwitter.png"
  }



  render() {
    return (
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
          content={this.shareTitle}
        />
        <meta
          name="twitter:description"
          content={this.shareDescription}
        />
        <meta
          name="twitter:image"
          content={this.shareImageTwitter}
        />

        {/* Facebook and others */}
        <meta
          property="og:title"
          content={this.shareTitle}
        />
        <meta
          property="og:description"
          content={this.shareDescription}
        />        
        <meta property="og:url" content="https://oxyn.io" />
        <meta
          property="og:site_name"
          content={this.title}
        />        
        <meta
          property="og:image"
          content={this.shareImageFacebook}
        />
        <meta property="og:image" content="image-1200x600.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />

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
        <link rel="manifest" href="/static/images/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/images/favicons/safari-pinned-tab.svg"
          color="#84DD72"
        />
        <link rel="shortcut icon" href="/static/images/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#84dd72" />
        <meta
          name="msapplication-config"
          content="static/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    );
  }
}
