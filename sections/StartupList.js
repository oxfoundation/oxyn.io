import React, { Component } from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Imagelist from '../components/Imagelist';

import pressGreenbiz from '../images/press-greenbiz.png';
import pressForbs from '../images/press-forbs.png';
import pressFledge from '../images/partners-fledge.png';
import pressRadiobue from '../images/press-radiobue.png';
import pressEcostar from '../images/partners-na.png';

export default class StartupList extends Component {
  render() {

    const allBrands = [
      {
        name:'GreenBIZ',
        image: pressGreenbiz,
        url: "https://www.greenbiz.com/article/these-8-nature-based-startups-around-world-are-going-save-it"
      },
      {
        name:'Forbse',
        image: pressForbs,
        url: "http://forbes.ge/forbestv/26/Oxyn-Blockchain-Green-Community"
      },
      {
        name:'Fledge',
        image: pressFledge,
        url: "http://fledge.co/fledgling/oxyn/"
      },
      {
        name:'RadioBlue Italia',
        image: pressRadiobue,
        url: "http://www.radiobue.it/tag/oxyn/"
      },
      {
        name:'Ecostar',
        image: pressEcostar,
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
