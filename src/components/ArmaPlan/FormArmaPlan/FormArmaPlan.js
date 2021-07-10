import React from 'react'
// import {NavLink} from 'react-router-dom'
import classes from '../../../style/style.module.css'

function FormArmaPlan() {
    return (
        <form className={classes.formArmaPlan}>
            <h2 className={classes.formArmaPlan__title}>Agrega o quita coberturas</h2>
            <div className={classes.formArmaPlan__navbar}>
                {/* <NavLink>Protege a tu auto</NavLink>
                <NavLink>Protege a los que te rodean</NavLink>
                <NavLink>mejora tu plan</NavLink> */}
            </div>
        </form>
    )
}

export default FormArmaPlan
