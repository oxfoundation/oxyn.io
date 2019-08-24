import React, { Component } from 'react';

//define item component
function ListItem(items) {
  return (
    <a href={items.value.url} className="imagelist__item" target="_blank">
      <img className="imagelist__image" src={items.value.image} alt={items.value.name} />
    </a>
  )
}

export default class Imagelist extends Component {

  render() {

    //esign all brands to var "brands"
    const items = this.props.items;

    const listItems = items.map((item, index) =>
      <ListItem key={index}  value={item} />
    );


    return (
      <div className="imagelist">
        {listItems}
      </div>
    )
  }
}
