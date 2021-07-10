import React from 'react'
import classes from '../../style/style.module.css'
import Tracking from '../UI/Tracking'
import Footer from '../Footer/Footer'

function ArmaPlan() {
    return (
        <div className={classes.ArmaPlan}>
            <Tracking 
                component='armaPlan'
                currentStep='2'
            />
            <Footer />
        </div>
    )
}

export default ArmaPlan
