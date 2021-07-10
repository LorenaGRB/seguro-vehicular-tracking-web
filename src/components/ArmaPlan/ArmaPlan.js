import React from 'react';
import classes from '../../style/style.module.css';
import Tracking from '../UI/Tracking';
import BannerArmaPlan from './BannerArmaPlan/BannerArmaPlan';
import FormArmaPlan from './FormArmaPlan/FormArmaPlan';
import Footer from '../Footer/Footer';

function ArmaPlan() {
    return (
        <div className={classes.armaPlan}>
            <Tracking component='armaPlan' currentStep='2' link='CarData'/>
            <div>
                <BannerArmaPlan />
                <FormArmaPlan />
                <Footer />
            </div>
        </div>
    )
}

export default ArmaPlan
