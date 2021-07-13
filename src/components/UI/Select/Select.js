import React from 'react'
import classes from './Select.module.scss'

function Select(props) {
    const label = <span
                    className={classes[`${props.component}__${props.id}-label`]} 
                    htmlFor={props.id}
                    
                >
                    {props.label}
                </span>;
    const options = props.options.map( (item) => {
        return (
            <option 
            key = { item }
            value = { item }
            className = { classes[`${props.component}__${props.id}-option`] }
        >
            { item }
        </option>
        )
    })
    return (
        <label className={classes[`${props.component}__${props.id}`]}>
            <select 
                className={classes[`${props.component}__${props.id}-select`]} 
                onChange={props.onchange}
                defaultValue={props.defaultValue}
                required
            >
                {options}
            </select>
            <span className={classes[`${props.component}__${props.id}-label`]}>
                {label}
            </span>
        </label>
    )
}

export default Select
