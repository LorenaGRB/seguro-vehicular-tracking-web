import React from 'react'
import classes from '../../style/style.module.css'
import CarDataForm from './CarDataForm/CarDataForm'
import Tracking from '../UI/Tracking'

function CarData() {
    return (
        <div className={classes.carData}>
            <Tracking 
                component='carData'
                currentStep='1'
            />
            <CarDataForm />
        </div>
    )
}

export default CarData
