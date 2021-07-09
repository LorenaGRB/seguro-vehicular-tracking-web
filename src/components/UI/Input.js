import React from 'react'
import classes from '../../style/style.module.css'

function Input(props) {
    let label = '';
    let span = '';

    if(props.type === 'checkbox'){
        label = <label 
                    className={classes[`${props.component}__${props.id}-label`]} 
                    dangerouslySetInnerHTML={{ __html: props.label }}
                    htmlFor={props.id}
                >
                </label>;
        span = <label 
                    className={classes[`${props.component}__${props.id}-checkmark`]}
                    htmlFor={props.id}
                ></label>
    }
    if(props.type ===  'radio'){
        label = <label 
                    className={classes[`${props.component}__${props.id}-label`]} 
                    dangerouslySetInnerHTML={{ __html: props.label }}
                    htmlFor={props.id}
                >
                </label>;
    }
    return (
        <div className={classes[`${props.component}__${props.id}-wrapper`] } >
            <input 
                className={classes[`${props.component}__${props.id}-input`]} 
                id = {props.id} 
                type = {props.type} 
                placeholder = {props.placeholder}
                value = {props.value}
                onChange = {props.onchange}
                onClick = {props.onclick}
                name = {props.name}
                defaultChecked = {props.defaultChecked}
            />
                {span}{label}
        </div>
        
    )
}

export default Input
