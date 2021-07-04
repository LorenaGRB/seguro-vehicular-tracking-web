import React from 'react'
import classes from '../../style/style.module.css'

function Button(props) {
    
    return (
        <button type='submit'className={classes[`${props.component}__${props.id}-button`]}>
            {props.text}
        </button>
    )
}

export default Button