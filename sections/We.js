import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import Section from '../components/Section';

export default class We extends Component {
  render() {
    return (
      <Section name="we">
        <Container>
          <Row>
            <Col md="5">
              <img src='/static/images/we.jpg' alt="Founders of OxFoundation" className="bordered-image"></img>
            </Col>
            <Col md="7">
              <div className="we__text">
                <div className="we__title">What is <span className="text-primary">Oxyn</span> and how It works</div>
                  
                <p>Annually, we produce up to <mark>400 million tons of plastic</mark>, but more than <mark>40 percent of it is used just once</mark>, and it's choking our waterways.</p>
                <p>What if we could send product packages back to the manufacturer and get money in exchange?</p>
                <p><strong>Oxyn is a cryptocurrency and blockchain ecosystem which allows you effortlessly to send packages back to the manufacturer for re-use or recycling purposes. </strong></p>

                <p>
                  1. Buy products included in Oxyn's program.<br />
                  2. After you have consumed a product, use your phone to scan its QR code or NFC from the package.<br />
                  3. Once you have scanned all packages, press the button that reads, "Take away". 
                </p>

                <p>That's it! We'll take care of rest: We will collect items from your location, clean them, sort them, and send them back to manufacturers.</p>

              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    )
  }
}
