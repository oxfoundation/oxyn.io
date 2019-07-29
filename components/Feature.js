import React from 'react'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'

const Feature = (props) => (
      <div className="feature">
        <Icon icon={props.icon} size="lg" className="feature__icon" />
        <h3 className="feature__title">
            {props.title}
        </h3>
        <p className="feature__description">
            {props.description}
        </p>
      </div>
)


export default Feature