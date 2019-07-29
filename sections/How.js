import React, { Component } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Flipbox from '../components/Flipbox';
import {Button} from 'reactstrap'

export default class How extends Component {
  render() {
    return (
      <Section name="how" className="pt-large">
        <SectionTitle
          title="How to get oxyns"
          subTitle = "Become a part of our mission - get a currency which will save our planet" />

        <div className="container">
          <div className="flipboxes">

            <Flipbox
              icon="greenorganizations"
              title="Treespond"
              content="Buy exclusive products or services from business, and
                        receive Oxyn Smart Tokens as loyalty rewards.">

              <Button color="primary" block href="https://treespond.com" target="_blank">Treespond Now</Button>
            </Flipbox>

            <Flipbox
              icon="consumer"
              title="Enlarge our community"
              content="Help us to spread the word. Invite your friends and family to the GREEN COMMUNITY" >
              
              <Button color="outline-primary" disabled block href="https://treespond.com" target="_blank">comming soon...</Button> 
              {/* Invite Friends */}

            </Flipbox>

            <Flipbox
              icon="businesses"
              title="Join OxFoundation"
              content="Are you supporting the cause we are fighting for? Invest in OxFoundation and become full time member.">

              <Button color="outline-primary" disabled block href="https://treespond.com" target="_blank">comming soon...</Button> 
              {/* Join Us */}

            </Flipbox>

          </div>
        </div>
      </Section>

    )
  }
}
