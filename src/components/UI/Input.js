import React from 'react'
import classes from '../../style/style.module.css'

function Input(props) {
    let label = '';
    let span = '';

    if(props.type === 'checkbox' || 'radio'){
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
    return (
        <div className={classes[`${props.component}__${props.id}-wrapper`] } >
            <input 
                id={props.id} 
                type={props.type} 
                className={classes[`${props.component}__${props.id}-input`]} 
                placeholder={props.placeholder}
            />
                {span}{label}
        </div>
        
    )
}

export default Input
