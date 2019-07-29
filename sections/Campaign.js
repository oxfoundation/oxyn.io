import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Numbers from "../components/Numbers";

export default class Campaign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connected: false,
      oxyns: 0,
      _oxyns: 0,
      _trees: 0,
      trees: 0,
      _users: 0,
      users: 0
    };
  }

  // getStats = () => {
  //   // console.log("getting stats")
  // var zis = this;
  //   if(this.state.bonusCode<=0){
  //     this.setState({bonus:null});
  //     return;
  //   }

  // axios({
  //     method: 'GET',
  //     url: '/stats/general',
  // }).then(response => {
  //   var data = response.data;

  //   zis.setState({_oxyns:(zis.state.oxyns)})
  //   zis.setState({_trees:(zis.state.trees)})
  //     zis.setState({_users:(zis.state.users)})
  //   this.setState({oxyns:data.oxyns.statValue,trees:data.trees.statValue,users:data.users.statValue});

  // }).catch(function (e) {

  //       if(e.response){
  //       }
  //   zis.setState({bonus:null});

  //   });

  // }

  componentDidMount(prevProps, prevState) {
    // this.getStats();
  }

  render() {
    return (
      <Section name="campaign py-large">
        <SectionTitle
          title="One Million Trees for America"
          subTitle="Participate in Oxyn and plant your trees"
        />
        <Container>
          <Row>
            <Col md="6">
              <img
                src="/static/images/usa.png"
                className="img-fluid"
                alt="One Million Trees The US"
              />
            </Col>
            <Col md="6">
              <div className="py-5 py-md-0 pr-lg-5 pt-lg-4 text-center text-md-left">
                <p>
                  To distribute the initial number of Oxyn Smart Tokens, we will
                  plant
                  <b>one million trees</b> in US National Forests thogether with
                  the{" "}
                  <a
                    href="https://www.nationalforests.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    National Forest Foundation
                  </a>
                  .
                </p>

                <p>
                  Immediately after planting, you will get a photo and
                  geo-location of the trees to share on social media.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="live-data pt-md-3 pt-lg-5">
            <Col sm="12" md="4">
              <Numbers align="start" type="trees" count={this.state.trees} />
            </Col>
            <Col sm="12" md="4">
              <Numbers align="center" type="people" count={this.state.users} />
            </Col>
            <Col sm="12" md="4">
              <Numbers align="end" type="oxyns" count={this.state.oxyns} />
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}
