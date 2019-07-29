import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import DefaultTemplate from "../../templates/Default";
import PageWrapper from "../../components/PageWrapper";
import Accordion from "../../components/Accordion";

export default class faq extends Component {
  constructor(props) {
    super(props);
    this.Questions = [
      {
        question: 'May I send any package back to the manufacturer?',
        answer:
          'Unfortunately no. You can send only packages of products which involved in  Oxyn system.'
      },
      {
        question: 'How to scan packages?',
        answer:
          'To scan packages, open tab "Packages", press button "Scan Package". Scan QR code or Barcode which you see on product package near Oxyn logotype.'
      },
      {
        question: 'How to use my "Reusable" item?',
        answer:
          'First of all, you have to assign a reusable item into your account. To do this open OxWallet mobile app and navigate to "Reusables" tab. Press the button "Add reusable item" and scan the QR code which was attached to your reusable item and you done.'
      },
      {
        question: 'After the requestion "take away" how fast I\'ll see Oxyns in my account statement?',
        answer:
          'It\'s depends. You\'ll receive a notification once items are collected and delivered back to the manufacturer.'
      },
    ];
  }

  render() {
    return (
      <DefaultTemplate className="--white">
        <PageWrapper title="Support">
          <Jumbotron fluid>
            <Container fluid>
              <p>
                <h5>In case of any questions please contact:</h5>
                <b>Email:</b> <a href="mailto:support@oxyn.io">support@oxyn.io</a><br />
                <b>Phone:</b> (802) 431-6996
              </p>
            </Container>
          </Jumbotron>
          <Accordion cards={this.Questions} />
        </PageWrapper>
      </DefaultTemplate>
    );
  }
}
