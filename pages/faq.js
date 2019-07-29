import React, { Component } from "react";
import DefaultTemplate from "../templates/Default";
import PageWrapper from "../components/PageWrapper";
import Accordion from '../components/Accordion'

export default class faq extends Component {


  constructor(props) {
    super(props)
    this.Questions = [
      {
        question: "Why not ICO?",
        answer: "We want to distribute tokens among those who appreciate the Oxyn initiative. People like you, who are conscious consumers and respect the environment we live in. Although we are not blind to the dynamics of the market, we prefer to avoid users who hold Oxyn exclusively as an instrument for manipulation and speculation."
      },
      {
        question: "How to mine Oxyns?",
        answer: "All Oxyn tokens are pre-mined and will be distributed  to green consumers. The mining” is directly linked with environmental campaigns carried out by the OX foundation. So, in order to mine Oxyns currently, users  plant trees and are rewarded with minted Oxyns."
      },
      {
        question: "When and how may I use my Oxyns?",
        answer: "You will be able to transfer all your Oxyns to our mobile and desktop wallets as soon as it’s launched. Your wallet will also show you all merchants accepting Oxyn payments. The OX foundation is actively working with the businesses to help them utilize and on-board their products to the Oxyn network."
      },

      {
        question: "What type of exclusive offers do I get?",
        answer: "Exclusive offers are pretty diverse. It can be an exclusive Coffee Macchiato at a local coffee shops, a subscription to National Geographic, a flight ticket from NYC to LA, or a car wash voucher. And if you’re paying with Oxyn, you do a lot more for the environment than when you would pay with Visa, Mastercard, Bitcoin or Monero."
      },


      {
        question: "How the Oxyn token economics looks like?",
        answer: "1 Billion tokens are  pre-mined<ul> <li> 70% public distribution </li><li> 14% OX foundation </li><li> 5% Ecosystem partners </li><li> 5% Advisors </li><li> 6% Founders </li> </ul>"
      }
    ]

  }
  

  render() {
    return (
      <DefaultTemplate className="--white">
        <PageWrapper title="FAQ">
            <Accordion cards={this.Questions}/>
        </PageWrapper>
      </DefaultTemplate>
    );
  }
}
