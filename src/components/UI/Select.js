import React from 'react'
import classes from '../../style/style.module.css'

function Select(props) {
    const options = props.options.map( (item) => {
        return (
            <option 
            key = { item.id }
            value = { item.select }
            className={classes[`${props.component}__${props.id}-option`] }
        >
            { item.select }
        </option>
        )
    })
    return (
        <div className={classes[`${props.component}__${props.id}-wrapper`] } >
            <select 
                className={classes[`${props.component}__${props.id}-select`]} 
                onChange={props.onchange}
            >
                {options}
            </select>
        </div>
        
    )
}

export default Select
