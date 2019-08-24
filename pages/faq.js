import React, { Component } from "react";
import DefaultTemplate from "../templates/Default";
import PageWrapper from "../components/PageWrapper";
import Accordion from '../components/Accordion'

export default class faq extends Component {


  constructor(props) {
    super(props)

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
