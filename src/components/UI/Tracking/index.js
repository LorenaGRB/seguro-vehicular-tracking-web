import React from 'react'
import { useHistory} from 'react-router-dom'
import classes from './Tracking.module.scss'

function Tracking(props) {
    const history = useHistory();
    return (
        <section className={classes[`${props.component}`]}>
            <button className={classes[`${props.component}__return`]} onClick={() => {history.push(`/${props.link}`);}}>
                &#60;    
            </button>
            <div className={classes[`${props.component}__state`]}>
                <ul className={classes[`${props.component}__steps`]}>
                    <li className={classes[`${props.component}__mobile`]}>PASO {props.currentStep} DE 2</li>
                    <li className={classes[`${props.component}__carDate`]}> <span>1</span> Datos del auto</li>
                    <li className={classes[`${props.component}__plan`]}><span>2</span>Arma tu plan</li>
                </ul>
                <div className={classes[`${props.component}__stateBar`]}></div>
            </div>
        </section>
    )
}

export default Tracking
