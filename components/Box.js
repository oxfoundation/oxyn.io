import React, { Component } from 'react';

export default class Box extends Component {
  render() {

    var Background;

    switch (this.props.icon) {
      case 'sustainability':
          Background = 'static/images/icon-sustainability.svg';
        break;

      case 'engagement':
        Background = 'static/images/icon-engagement.svg';
        break;

      case 'transparency':
        Background = 'static/images/icon-transparency.svg';
        break;

      case 'ecofriendly':
        Background = 'static/images/icon-ecofriendly.svg';
        break;
        default:
          Background = 'static/images/icon-sustainability.svg';
    }

    var Style = {
        backgroundImage: `url(${Background})`
      };

    return (

      <div className={`box box-${this.props.order}`} style={Style}>
        <div className="box__title">{this.props.title}</div>
        <div className="box__content">{this.props.content}</div>
      </div>
    )
  }
}

Box.defaultProps = {
  order: 1
}
