import React, { Component } from "react";
import DefaultTemplate from "../templates/Default";
import Intro from "../sections/Intro";
import FeatureList from "../sections/FeatureList";
import Campaign from "../sections/Campaign";
import How from "../sections/How";
import We from "../sections/We";

import Link from "next/link";
import Download from "../sections/Download";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.featureList = [
      {
        title: "Transparent",
        description:
          "One of the main advantages of blockchain is transparency. Now brands can show how many items reused and how much plastics eliminated. ",
        icon: ["fas", "handshake"]
      },
      {
        title: "efficient",
        description:
          "Modern payment systems are extremely inefficient for microtransactions. Oxyn allows us to make transactions for each package in seconds absolutely for FREE.",
        icon: ["fas", "search-dollar"]
      },
      {
        title: "Public",
        description:
          "Oxyn blockchain network developed by OxFoundation is open for any organization, commercial, or not-commercial ideas that are trying to eliminate plastic pollution and improve the environment.",
        icon: ["fas", "check-double"]
      },
      {
        title: "Global",
        description:
          "Plastic is a global problem. The power of decentralization and flexibility of builtin currency guaranty that it will work worldwide.",
        icon: ["fas", "globe-americas"]
      },
      {
        title: "Tech-driven",
        description:
          "Technology itself is nothing without the community behind it. OxComunity is a vital part of the Oxyn environment, which opens a variety of opportunities for different businesses. ",
        icon: ["fas", "cogs"]
      },
      {
        title: "Empowered by Community",
        description:
          "Technology itself is nothing without the community behind it. OxComunity is a vital part of the Oxyn environment, which opens new horizons to fight plastic pollution. ",
        icon: ["fas", "users"]
      }
    ];
  }

  render() {
    return (
      <DefaultTemplate
        headerIsFixed={true}
        headerIsMonochrome={true}
        changeStyleOnScroll={true}
        headerIsMonochrome={true}
      >
        <Intro
          images={[
            "/static/images/slides/slide_1.jpg",
            "/static/images/slides/slide_2.jpg",
            "/static/images/slides/slide_3.jpg",
            "/static/images/slides/slide_4.jpg"
          ]}
          title="Cryptocurrency designed to reduce plastic pollution"
          subTitle="After use send product packages back and get money"
        />
        <Download />
        <We />
        <How />
        {/* <Campaign /> */}
        <FeatureList
          title="Bennefits of Oxyn"
          subTitle="Global solution for global problem"
          list={this.featureList}
        />
      </DefaultTemplate>
    );
  }
}
