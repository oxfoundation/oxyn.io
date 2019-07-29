import React, { Component } from 'react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Accordion from '../components/Accordion';



export default class Faq extends Component {

    constructor(props) {
        super(props)

        this.background = this.props.background || 'white'

        this.list = this.props.list || []
    }


  render() {
    return (
        <Section name={`s-faq pt-large pb-large --${this.background}`}>
        <SectionTitle
          title="FAQ"
          subTitle="To ask questions use Social Networks or email hello@sweenk.com"/>

        <div className="container-small">
          <Accordion cards={this.list} />
        </div>
      </Section>
    )
  }
}
