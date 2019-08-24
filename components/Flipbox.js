import React from 'react'

export default function Flipbox(props) {

  var Icon = props.icon
  return (
    <div className="flipbox">
    <div className="flipbox__side ">
      <Icon size="3em" className="text-primary" /> 
      <div className="flipbox__title">{props.title}</div>
      <div className="flipbox__description">{props.content}</div>
      <div className="flipbox__action">
        {props.children}
      </div>
    </div>
  </div>
  )
}
