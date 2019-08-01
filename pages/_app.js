import React from 'react';
import App, { Container } from 'next/app';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faPlay,
  faAward,
  faCheckDouble,
  faChessPawn,
  faStar,
  faAngleDown,
  faChevronCircleRight,
  faBinoculars,
  faUserCheck,
  faDumbbell,
  faChartPie,
  faLayerGroup,
  faBullseye,
  faHandshake,
  faSearchDollar,
  faGlobeAmericas,
  faCogs,
  faUsers
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faAward,
  faPlay,
  faCheckDouble,
  faChessPawn,
  faStar,
  faAngleDown,
  faChevronCircleRight,
  faBinoculars,
  faUserCheck,
  faDumbbell,
  faChartPie,
  faLayerGroup,
  faBullseye,
  faHandshake,
  faSearchDollar,
  faGlobeAmericas,
  faCogs,
  faUsers
)


class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;