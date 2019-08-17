import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import DefaultTemplate from "../templates/Default";
import PageWrapper from "../components/PageWrapper";
import Accordion from "../components/Accordion";

export default class HowItWorks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultTemplate className="--white">
        <PageWrapper title="How it works">
          <p>Annually, we produce up to 400 million tons of plastic, but more than 40 percent of it is used just once, and it's choking our waterways.</p>
          <p>What if we could send product packages back to the manufacturer and get money in exchange?</p>
          <p><strong>Oxyn is a cryptocurrency and blockchain ecosystem which allows you effortlessly to send packages back to the manufacturer for re-use or recycling purposes.</strong> </p>

          <p>To earn Oxyns, you must follow three simple steps:</p>

          <ol>
            <li>Buy products included in Oxyn's program.</li>
            <li>After you have consumed a product, use your phone to scan its QR code or NFC from the package.</li>
            <li>Once you have scanned all packages, press the button that reads, "Take away."</li>
          </ol>

          <p>That's it! We'll take care of rest: We will collect items from your location, clean them, sort them, and send them back to manufacturers.</p>
          <p>The manufacturers will receive packages for further use; you'll receive Oxyns, which give access to exclusive products and services offered by our partners.</p>

        </PageWrapper>
      </DefaultTemplate>
    );
  }
}
