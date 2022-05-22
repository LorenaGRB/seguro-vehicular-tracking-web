import React from 'react'
import classes from './CarData.module.scss'
import CarDataForm from './CarDataForm'
import Tracking from '../../components/UI/Tracking'
import Footer from '../../components/Footer'

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
