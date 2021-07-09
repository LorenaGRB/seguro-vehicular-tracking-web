import React from 'react'
import classes from '../../style/style.module.css'

function Button(props) {
    
    return (
        <button
            type='submit' 
            // dangerouslySetInnerHTML={{ __html: props.html }}
            className={classes[`${props.component}__${props.id}-button`]}
        >
            {props.text}
        </button>
    )
}

export default Button