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
          title="Why Oxyn is special"
          subTitle = "Global, Transparent & Smart blockchain ecosystem" />

        <div className="container">
          <div className="flipboxes">

            <Flipbox
              icon="businesses"
              title="For Business"
              content="The power of blockchain technology allows companies to be more transparent and show the flow of the product packaging: How many items are in the supply chain, how many contain re-used">
              {/* <Button color="primary" block href="https://treespond.com" target="_blank">Treespond Now</Button> */}
            </Flipbox>

            <Flipbox
              icon="consumer"
              title="For comunity"
              content="Global problems need comprehensive solutions. As plastic pollution affects the globe, we need a solution, which will be easily implemented and available in any part of the world. " >
            </Flipbox>

            <Flipbox
              icon="greenorganizations"
              title="For Foundations"
              content="Decentralization means that Oxyn doesn't belong to OxFoundation alone. Any organization who is fighting for plastic pollution can use the power of blockchain, decentralized applications, and smart contracts.">
            </Flipbox>

          </div>
        </div>
      </Section>

    )
  }
}
