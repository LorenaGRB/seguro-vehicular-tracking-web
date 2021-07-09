import React from 'react'
import classes from '../../style/style.module.css'
import CarDataForm from './CarDataForm/CarDataForm'
import Tracking from '../UI/Tracking'
import Footer from '../Footer/Footer'

function CarData() {
    return (
        <div className={classes.carData}>
            <Tracking 
                component='carData'
                currentStep='1'
            />
            <CarDataForm />
            <Footer />
        </div>
    )
}

export default CarData
