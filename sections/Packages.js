import React, { Component } from 'react';
import { Container, ButtonGroup, Button} from 'reactstrap';
import { connect } from 'react-redux'

import {setActiveTab} from '../store/Pricetabs'

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import Infocard from '../components/Infocard';
import PriceTabs from '../components/PriceTabs'

export  class Packages extends Component {

    constructor (props) {
        super(props);
        
        
        this.state = {
            activeTab: 'annual'
        };
        this.packages = [
            {
                isActive:true,
                isRecommended: false,
                name: "Basic",
                description:"Recommended for Angels",
                price: {
                    monthly: 59.99,
                    annual: 49.99
                },
                features: [
                    "<b>5</b> active teams",
                    "<b>20</b> challanges per month",
                    "Advance search",
                    "Follow unlimited startups"
                ]                
            },
            {
                isActive:true,
                isRecommended:true,
                name: "Standard",
                description:"Recommended for Accelerators",
                price: {
                    monthly: 119.99,
                    annual: 99.99
                },
                features: [
                    "<b>15</b> active teams",
                    "<b>50</b> challange per month",
                    "<b>3</b> advance review",
                    "Auto sugestions"
                ]                
            },
            {
                isActive: false,
                isRecommended: false,                
                name: "Advance",
                description:"Recommended for VCs",
                price: {
                    monthly: 449.99,
                    annual: 399.99
                },
                features: [
                    "<b>Unlimited</b> active teams",
                    "<b>Unlimited</b> challanges",
                    "<b>5</b> advance review",
                    "Much more..."
                ]                
            }
        ]

        this.toggleTab = this.toggleTab.bind(this);
    }

    toggleTab (tab) {
        if (this.props.activeTab !== tab) {
            this.props.changeTab(tab)
        }
    }




  render() {
    return (
        <Section name="all-packages" >
        <SectionTitle
            title="Pricing"
            subTitle="Increase your investment success rate." />

        <Container>
            <PriceTabs 
                activeTab = {this.props.activeTab} 
                toggleTab = {this.toggleTab} />
            <div className="packages">
                {
                    this.packages.map( (item, index)=>
                        <Infocard
                            priceType={this.props.activeTab}
                            key={index}
                            data={item}/>
                    )
                }
            </div>
        </Container>

      </Section>
    )
  }
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})

const mapDispatchToProps = (dispatch) => ({
    changeTab: (currentTab) => dispatch(setActiveTab(currentTab))
})


export default connect (mapStateToProps, mapDispatchToProps)(Packages)