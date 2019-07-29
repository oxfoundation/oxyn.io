import React, { Component } from "react";
import { Collapse, CardBody, CardHeader, Card } from "reactstrap";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: this.props.collapse, cards: this.props.cards };
  }

  toggle(e) {
    e.preventDefault();
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? -1 : Number(event)
    });
  }

  render() {
    const { cards, collapse } = this.state;

    return (
      <div className="accordion">
        {cards.map((item, key) => {
          var className = collapse === key ? "open-state" : "collapsed-state";
          return (
            <Card key={key} className="accordion__card">
              <CardHeader
                onClick={this.toggle}
                className="accordion__card-header"
                data-event={key}
              >
                {item.question}
              </CardHeader>
              <Collapse className={className} isOpen={collapse === key}>
                <CardBody
                  className="accordion__card-body"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </Collapse>
            </Card>
          );
        })}
      </div>
    );
  }
}
