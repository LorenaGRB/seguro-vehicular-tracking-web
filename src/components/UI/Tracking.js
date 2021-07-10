import React from 'react'
import { useHistory} from 'react-router-dom'
import classes from '../../style/style.module.css'
function Tracking(props) {
    const history = useHistory();
    return (
        <section className={classes[`${props.component}__tracking`]}>
            
            <button className={classes[`${props.component}__tracking-return`]} onClick={() => {history.push(`/seguro-vehicular-tracking/${props.link}`);}}>
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
