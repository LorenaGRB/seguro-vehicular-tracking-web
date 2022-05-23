import React from 'react'
import classes from './CarData.module.scss'
import CarDataForm from './CarDataForm'
import Tracking from '../../components/UI/Tracking'

function CarData() {
    return (
        <div className={classes.carData}>
            <>
                <Tracking 
                    component='carData'
                    currentStep='1'
                    link='Login'
                />
                <CarDataForm />
            </>
        </div>
    
    )
}

export default CarData
