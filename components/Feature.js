import React from 'react'


const Feature = (props) => {

    const Icon = props.icon
    
    return (
        <div className="feature">
            <Icon size="lg" className="feature__icon" />
            <h3 className="feature__title">
                {props.title}
            </h3>
            <p className="feature__description">
                {props.description}
            </p>
        </div>
    )
}

export default Feature