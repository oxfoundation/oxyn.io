import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import DefaultTemplate from "../templates/Default";
import PageWrapper from "../components/PageWrapper";
import Accordion from "../components/Accordion";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultTemplate className="--white">
        <PageWrapper title="About Us">
          <p>Oxyn is a blockchain ecosystem developed by OxFoundation to reduce plastic pollution. The OxFoundation's mission is to empower non-profit and for-profit organizations with the power of free of charge, fast and scalable blockchain ecosystem and cryptocurrency to efficiently fight plastic pollution.</p>
          <p>Besides OxFoundation, we are running Oxyn LLC, to run commercial projects based on the Oxyn blockchain ecosystem to support the foundation financially and make it sustainable.</p>
          <p>Two of us have founded this organization; Lasha Kvantaliani and Leo Dvalishvili. Both of us are passionate about decentralized technologies and the environment.  We truly believe in what we are doing through this organization.</p>
          <p>To find out more, check our blog.</p>
        </PageWrapper>
      </DefaultTemplate>
    );
  }
}
