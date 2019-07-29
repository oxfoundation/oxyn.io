import React, { Component } from 'react';

export default class Cardbox extends Component {
  render() {


    var mainIcon;

    switch (this.props.icon) {
      case 'consumer':
          mainIcon = '/static/images/icon-consumer.svg';
        break;

      case 'businesses':
          mainIcon = '/static/images/icon-businesses.svg';
        break;

      case 'greenorganizations':
          mainIcon = '/static/images/icon-greenorganizations.svg';
        break;

        default:
          mainIcon = GreenOrganizations;
    }

    return (

      <div className="flipbox">
        <div className="flipbox__side ">
          <img src={mainIcon} alt="" />
          <div className="flipbox__title">{this.props.title}</div>
          <div className="flipbox__description">{this.props.content}</div>
          <div className="flipbox__action">
            {this.props.children}
          </div>
        </div>
      </div>

    )
  }
}
