import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    return (
      <section {...this.props} className={`${this.props.name} ${this.props.className}`}  id={`s${this.props.name}`} >
        {this.props.children}
      </section>
    )
  }
}
