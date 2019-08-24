import React, { Component } from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Imagelist from '../components/Imagelist';


export default class Press extends Component {
  render() {

    const allBrands = [
      {
        name:'GreenBIZ',
        image: 'static/images/press/press-greenbiz.png',
        url: "https://www.greenbiz.com/article/these-8-nature-based-startups-around-world-are-going-save-it"
      },
      {
        name:'Forbse',
        image: 'static/images/press/press-forbs.png',
        url: "http://forbes.ge/forbestv/26/Oxyn-Blockchain-Green-Community"
      },
      {
        name:'Fledge',
        image: 'static/images/press/press-radiobue.png',
        url: "http://fledge.co/fledgling/oxyn/"
      },
      {
        name:'RadioBlue Italia',
        image: 'static/images/press/press-greenbiz.png',
        url: "http://www.radiobue.it/tag/oxyn/"
      },
      {
        name:'Ecostar',
        image: 'static/images/press/press-greenbiz.png',
        url: "https://www.ecostarhub.com/startup-portfolio/#oxyn"
      },
    ];

    return (
      <Section name=" s-press pt-large pb-large">
        <SectionTitle title="Press mentions" />
        <Imagelist items = {allBrands} />
      </Section>
    )
  }
}
