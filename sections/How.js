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
          title="How Oxyn Works"
          subTitle = "To earn ‘Oxyns’, all you have to do is follow these three simple steps:" />

        <div className="container">
          <div className="flipboxes">

            <Flipbox
              icon="businesses"
              title="Buy"
              content="In your local shop or online, you can buy any of your favorite products included in our program. You can recognize them by the Oxyn logo label on the package and QR code.">
              {/* <Button color="primary" block href="https://treespond.com" target="_blank">Treespond Now</Button> */}
            </Flipbox>

            <Flipbox
              icon="consumer"
              title="Collect"
              content="After you have consumed the product, scan the unique code attached to the product package via our mobile application. You must collect a minimum of ten items, once you’ve done that, it’s time to send them back!" >
            </Flipbox>

            <Flipbox
              icon="greenorganizations"
              title="Send Back"
              content="Once you have scanned all the packages, press the button that reads 'Send Back', Find the closest drop-off location and leave packages! We'll take care of rest: clean, sort, and send them back to the manufacturers.">
            </Flipbox>

          </div>
        </div>
      </Section>

    )
  }
}
