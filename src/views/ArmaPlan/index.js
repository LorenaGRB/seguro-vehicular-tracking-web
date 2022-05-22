import React from 'react';
import classes from './ArmaPlan.module.scss';
import Tracking from '../../components/UI/Tracking';
import BannerArmaPlan from './BannerArmaPlan';
import FormArmaPlan from './FormArmaPlan';


function ArmaPlan(props) {
    return (
        <div className={classes.armaPlan}>
            <Tracking component='armaPlan' currentStep='2' link='CarData'/>
            <div>
                <BannerArmaPlan />
                <FormArmaPlan/>
            </div>
        </div>
    )
}

export default ArmaPlan
