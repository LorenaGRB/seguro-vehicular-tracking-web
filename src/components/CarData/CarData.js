import React from 'react'
import classes from './CarData.module.scss'
import CarDataForm from './CarDataForm/CarDataForm'
import Tracking from '../UI/Tracking/Tracking'
import Footer from '../Footer/Footer'

function CarData() {
    return (
        <div className={classes.carData}>
            <Tracking 
                component='carData'
                currentStep='1'
                link='Home'
            />
            <CarDataForm />
            <Footer />
        </div>
    )
}

export default CarData
