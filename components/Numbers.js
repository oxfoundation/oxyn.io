import React, { Component } from "react";

export default class LiveData extends Component {
  render() {
    var item = {
      image: iconTrees,
      text: "Trees planted"
    };

    var iconOxyns = "/static/images/icon-gradient-oxyns.svg";
    var iconPeople = "/static/images/icon-gradient-people.svg";
    var iconTrees = "/static/images/icon-gradient-trees.svg";

    switch (this.props.type) {
      case "people":
        item.image = iconPeople;
        item.text = "People involved";
        break;

      case "oxyns":
        item.image = iconOxyns;
        item.text = "Oxyns distributed";
        break;
      case "trees":
        item.image = iconTrees;
        item.text = "Plastic Eliminated";
        break;
      default:
    }

    return (
      <div className={`numbers align-${this.props.align}`}>
        <div className="my-4">
          <img src={item.image} alt={item.text} className="numbers__image" />
          <div className="numbers__data text-center text-md-left">
            <div className="numbers__count">
              {new Intl.NumberFormat("en-US").format(this.props.count)}
            </div>
            <div className="numbers__text">{item.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

LiveData.defaultProps = {
  align: "start",
  type: "trees",
  count: 0
};
