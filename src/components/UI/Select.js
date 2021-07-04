import React from 'react'
import classes from '../../style/style.module.css'

function Select(props) {
    const options = props.options.map( (item) => {
        return (
            <option 
            key = { item.id }
            value = { item.id }
            className={classes[`${props.component}__${props.id}-option`] }
        >
            { item.select }
        </option>
        )
    })
    return (
        <div className={classes[`${props.component}__${props.id}-wrapper`] } >
            <select className={classes[`${props.component}__${props.id}-select`] }>
                {options}
                
            </select>
        </div>
        
    )
}

export default Select
