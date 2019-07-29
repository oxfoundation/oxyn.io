import React, { Component } from "react";
import DefaultTemplate from "../templates/Default";
import Intro from "../sections/Intro";
import FeatureList from "../sections/FeatureList";
import Campaign from "../sections/Campaign";
import How from '../sections/How';
import We from '../sections/We';

import Link from "next/link";
import Download from "../sections/Download";

export default class index extends Component {

  constructor(props) {
    super(props)
  
    this.featureList = [
      {
        title: "Gamify your progress",
        description:
          "It's very important to know how fast your startup is growing and which factors influence the growth. Measure your startup's key indicators in a fun and attractive way",
        icon: ["fas", "star"]
      },
      {
        title: "Engage investors",
        description:
          "Receive exclusive challenges from investors interested in your startup. Allow them to follow you and monitor your growth rate in a real-time",
        icon: ["fas", "chess-pawn"]
      },
      {
        title: "Perfect match",
        description:
          "Top startups will be reviewed by our team and presented to appropriate angels, accelerators or VC's according to your startup's needs",
        icon: ["fas", "check-double"]
      }
    ];

  }
  

  render() {
    return (
      <DefaultTemplate headerIsFixed={true} headerIsMonochrome={true} changeStyleOnScroll={true} headerIsMonochrome={true}>
          <Intro
            images={[
              "/static/images/slides/slide_1.jpg",
              "/static/images/slides/slide_2.jpg",
              "/static/images/slides/slide_3.jpg",
              "/static/images/slides/slide_4.jpg",
            ]}
            title="Cryptocurrency designed to reduce plastic pollution"
            subTitle="After use send product packages back and get money"
          />
          <Download />
          <We  />
          <How  />
          {/* <Campaign /> */}
          <FeatureList
            title="Bennefits of Oxyn"
            subTitle="5 min pitch is definitely it's not enough"
            list={this.featureList}
          />

      </DefaultTemplate>
    );
  }
}
