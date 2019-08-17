import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';


export default class Download extends Component {
    render() {
        return (
            <Section name="download" className="pt-large">
                <SectionTitle
                title="DOWNLOAD THE APP"
                subTitle = "OxWallet for Android and iOS" />

                <Row>
                    <Col xs={{ size: 12}} md={{ size:9, offset:3}} >
                        <div className="download-links">
                            <Row>

                                {/* iOS */}
                                <Col xs={12} md={4} >
                                    <div className="downloadBox">
                                        <a href="https://apps.apple.com/app/id1469283324" target="_blank" className="downloadBox__link">
                                            <div className="sdl-img ">
                                                <img src="static/images/apple.png " alt=" " />
                                            </div>
                                            <div className="sdl-content ">
                                                <p>Download on theee</p>
                                                <h3>App Store</h3>
                                            </div>
                                        </a>
                                    </div>
                                </Col>

                                <Col xs={12} md={4} >
                                    <div className="downloadBox disable">
                                        <a href="" className="downloadBox__link" onClick ={ (e) => { e.preventDefault() }}>
                                            <div className="sdl-img ">
                                                <img src="static/images/playstore.png " alt=" " />
                                            </div>
                                            <div className="sdl-content ">
                                                <p>Get it on</p>
                                                <h3>Google Playstore</h3>
                                            </div>
                                        </a>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Col>

                </Row>

            </Section>
        )
    }
}
