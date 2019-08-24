import React, { Component } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Accordion from '../components/Accordion';



export default class Faq extends Component {

    constructor(props) {
        super(props)

        this.background = this.props.background || 'gray'
        this.Questions = [
          {
            question: "How do you deliver products back?",
            answer: "Right now we are validating a few options. The main alternative is to take packages away from the location you entered into our application. However, we also want to build a network of  \"Drop Off\" locations that will be easily accessible to our customers."
          },
          {
            question: "Where is the Oxyn service available?",
            answer: "Currently, we cover only the NYC area, but we are working hard to involve additional resources and investment to expand our coverage area."
          },
          {
            question: "What is the economy behind Oxyn cryptocurrency?",
            answer: "The Economy of Oxyn is the same as for Stabilcoin or Facebook Libra. Simply it means that behind each Oxyn there is an appropriate amount of US dollars (or any other currency). So, it might be exchanged back to FIAT money any time."
          },
    
          {
            question: "Where can I buy Oxyn cryptocurrency?",
            answer: "Individuals can sell Oxyns at any time, but won't buy it. The only way will be to go green - by collecting and sending used product packages back to the manufacturer. This allows different businesses to provide additional perks to people who care for the environment and hold Oxyns."
          },
    
    
          {
            question: "How can I support Oxyn?",
            answer: "We are still in the early stages of development, so your support is more important than you might think. You can download our application, follow us on social media, spread the word about Oxyn and assist us with ideas and feedback. This will help us to continue growing and moving in the right direction towards a more waste-free world."
          }
        ]
    
    }


  render() {
    return (
        <Section name={`s-faq pt-large pb-large --${this.background}`}>
        <SectionTitle
          title="FAQ"
          subTitle="To ask questions use Social Networks or email hello@oxyn.io"/>

        <div className="container-small">
          <Accordion cards={this.Questions} />
        </div>
      </Section>
    )
  }
}
