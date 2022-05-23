import React from 'react'
import classes from './TotalAmount.module.scss'
import Button from '../../../../components/UI/Button'

function TotalAmount(props) {
    return (
        <div className={classes.wrapper}>
            <p className={classes.amount}>${props.amount}.00</p>
            <h3 className={classes.title}> El precio incluye :</h3>
            <ul className={classes.listAditionals}>
                <li className={classes.listAditionals__llanta}>LLanta de repuesto</li>
                <li className={classes.listAditionals__motor}>Análisis de motor</li>
                <li className={classes.listAditionals__aros}>Aros gratis</li>
                <li className={classes.listAditionals__aros}>Mantenimiento completo anual</li>
            </ul>
            <Button 
            component='formArmaPlan'
            id='loquiero'
            text='LO QUIERO'
            />
        </div>
    )
}

export default TotalAmount
