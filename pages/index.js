import React, { Component } from "react";
import DefaultTemplate from "../templates/Default";
import Intro from "../sections/Intro";
import FeatureList from "../sections/FeatureList";
import Campaign from "../sections/Campaign";
import How from "../sections/How";
import We from "../sections/We";
import Faq from '../sections/Faq'
import Press from '../sections/Press'
import What from '../sections/What'
import {FiWind, FiCrosshair, FiTarget, FiLayers, FiGlobe, FiBox, FiUser} from 'react-icons/fi';


import Link from "next/link";
import Download from "../sections/Download";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.featureList = [
      {
        title: "Transparent",
        description:
          "One of the main advantages of blockchain is transparency. Now brands can show how many items re-used and how much plastics eliminated, so you are never in any doubt about the real facts and statistics.",
        icon: FiWind
      },
      {
        title: "Efficient",
        description:
          "Modern payment systems are extremely inefficient for microtransactions. Oxyn allows us to make transactions for each package in seconds, and it’s absolutely FREE.",
        icon: FiTarget
      },
      {
        title: "Decentralized",
        description:
          "Oxyn blockchain network developed by OxFoundation is open for any organization, including commercial and non-commercial ideas that are trying to eliminate plastic pollution and help the environment.",
        icon: FiLayers
      },
      {
        title: "Global",
        description:
          "Plastic is a global problem. A modern product supply chain is international. The power of decentralization and flexibility of built-in currency guarantee that it will work worldwide.",
        icon: FiGlobe
      },
      {
        title: "Tech-Driven",
        description:
          "Smart contracts, free microtransactions, NFC product protection, supply chain tracking, this is only a shortlist of features that blockchain technology and the Oxyn ecosystem enable.",
        icon: FiBox
      },
      {
        title: "Empowered by Community",
        description:
          "Technology itself is nothing without the community behind it. OxComunity is a vital part of the Oxyn environment, which opens new horizons to fight plastic pollution.  We need you to make a difference.",
        icon: FiUser
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
          title="Send your used product packages back and get money"
          subTitle="A cryptocurrency designed to reduce plastic pollution"
        />
        <Download />
        <We title="Why we need to change?" img="/static/images/pollution.png" style={{marginTop:"-100px"}}>
          <p>Annually, we as humans produce up to <mark>500 million tons of plastic; more than 40 percent of this is only used once</mark>, and it is choking our waterways, polluting our oceans and harming our wildlife.</p>
          <p>Plastics have changed the way we live as a race.  However, we are consuming too much too fast, and we have no real way of coping with the amount of plastic waste that we are producing.  The only way forward is to change the way we think about packaging; it’s time to try something new.</p>
        </We>

        <We title="What is Oxyn?" isreverse="true" img="/static/images/reuse.png">
          <p>What if we could send product packages back to the manufacturer and get money in exchange?</p>
          <p>Oxyn acts as a solution to the problems of plastic pollution and waste; it is a <mark>cryptocurrency and blockchain ecosystem that allows you to effortlessly send packages back to the manufacturer</mark> for re-use purposes, to help eliminate plastic pollution.  This is a win-win for both the consumer and the planet! </p>
        </We>

        {/* <What /> */}

        {/* <Press /> */}
        <How />
        {/* <Campaign /> */}
        <FeatureList
          title="Benefits of Oxyn?"
          subTitle="Oxyn provides a global solution for a global problem"
          list={this.featureList}
          background="gray"
        />
        <Faq background="white" />
      </DefaultTemplate>
    );
  }
}
