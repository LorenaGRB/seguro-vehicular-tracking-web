import React from 'react'
import classes from '../../style/style.module.css'
function Tracking(props) {
    return (
        <section className={classes[`${props.component}__tracking`]}>
            <button className={classes[`${props.component}__tracking-return`]}>
                &#60;    
            </button>
            <div className={classes[`${props.component}__tracking-state`]}>
                <ul className={classes[`${props.component}__tracking-steps`]}>
                    <li className={classes[`${props.component}__tracking-mobile`]}>PASO {props.currentStep} DE 2</li>
                    <li className={classes[`${props.component}__tracking-carDate`]}> <span>1</span> Datos del auto</li>
                    <li className={classes[`${props.component}__tracking-plan`]}><span>2</span>Arma tu plan</li>
                </ul>
                <div className={classes[`${props.component}__tracking-stateBar`]}></div>
            </div>
        </section>
    )
}

export default Tracking
