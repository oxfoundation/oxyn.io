import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Box from '../components/Box';

export default class What extends Component {

  

  constructor(props) {
    super(props)
  
    this.background = this.props.background || 'gray'
  }
  

  render() {
    return (
      <Section name={`what pt-large --${this.background}`}>
        <SectionTitle
          title="What is Oxyn"
          subTitle = "A cryptocurrency driven by environmental incentives for THE GREEN FIGHTERS" />

          <Container>
              <Row className="align-items-center">
                <Col lg="5">
                  <p className="text-center text-md-left">
                    Oxyn is a fast and secure technology for the GREEN COMMUNITY.<br />
                    It enables us to exchange value between CSR driven business corporations, conscious consumers and environmental organizations.
                  </p>

                  <p className="text-center text-md-left">
                  Our permission-based network is completely maintained by thousands of environmental 
                  organizations all around the world who in return receive 0.5% of every OXYN transaction to execute GREEN PROJECTS.
                  </p>
                </Col>
                <Col lg="7">
                  <div className="boxes">
                    <Box  icon="transparency"
                          order="1"
                          title = "Transparency"
                          content = "The blockchain system enables GREEN FIGHTERS and CSR driven business corporations to track where, how and on which environmental projects are funds being spent by environmental organizations" />

                    <Box  icon="ecofriendly"
                          order="2"
                          title = "Eco Friendly"
                          content = "Our eco-friendly consensus algorithm doesn’t require major computing power and doesn’t waste tons of energy" />

                    <Box  icon="sustainability"
                          order="3"
                          title = "Fast and Lightweight"
                          content = "OXYN is built to be not just helpful but useful as well. Its fast and secure services makes OXYN easy to use in everyday life." />

                    <Box  icon="engagement"
                          order="4"
                          title = "User Engagement"
                          content = "Businesses can use OXYN’s smart tokens as a loyalty program, enabling GREEN FIGHTERS to designate which environmental project they would like to support" />
                  </div>
                </Col>
              </Row>
          </Container>


      </Section>



    )
  }
}
