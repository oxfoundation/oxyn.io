import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Section from "../components/Section";
 import SectionTitle from "../components/SectionTitle";
import Feature from "../components/Feature";

export default class FeatureList extends Component {

  constructor(props) {
    super(props);
    this.background = this.props.background || 'gray'
    this.items = this.props.list;
  }


  render() {
    return (
      <Section name={`what pt-large --${this.background}`}>
        <SectionTitle title={this.props.title} subTitle={this.props.subTitle} />
        
        <Container>
          <Row className="align-items-center text-center">
            {this.items.map((item, index) => (
              <Col xs="12" md="6" lg="4" key={index}>
                <Feature
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </Col>
            ))}
          </Row>
        </Container> 
      </Section>
    );
  }
}
