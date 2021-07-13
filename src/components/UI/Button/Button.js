import React from 'react'
import classes from './Button.module.scss'

function Button(props) {
    return (
        <button
            type='submit' 
            className={classes[`${props.component}__${props.id}`]}
        >
        {props.text}
        </button>
    )
}

export default Button