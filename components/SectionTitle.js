import React, { Component } from "react";

export default class SectionTitle extends Component {

  componentWillMount() {
    this.subTitle = this.props.subTitle ? (
      <div className="section-titles__sub-title">{this.props.subTitle}</div>
    ) : null;
  }
  

  render() {

    return (
      <div className="section-titles">
        <div className="section-titles__container">
          <div className="section-titles__main-title">{this.props.title}</div>
          {this.subTitle}
        </div>
      </div>
    );
  }
}
