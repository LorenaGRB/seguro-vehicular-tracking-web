import React from 'react'
import {Link} from 'react-router-dom'
import classes from "./BannerArmaPlan.module.scss";
import man from '../../../assets/images/armaPlan/man.png'
function BannerArmaPlan() {
    return (
        <header className={classes.bannerArmaPlan}>
            <h2 className={classes.bannerArmaPlan__title}>Mira las coberturas</h2>
            <h3 className={classes.bannerArmaPlan__subtitle}>Conoce las coberturas para tu plan</h3>
            <section className={classes.bannerArmaPlan__informationWrap}>
                <p className={classes.bannerArmaPlan__plate}>Placa: C2U-114</p>
                <p className={classes.bannerArmaPlan__brand}>Wolkswagen 2019 Golf</p>
                <Link
                className={classes.bannerArmaPlan__edit} 
                to = '/seguro-vehicular-tracking/CarData'
                >
                    EDITAR
                </Link>
            </section>
            <img 
            className={classes.bannerArmaPlan__img} 
            src={man} 
            alt='arma tu plan'
            />
        </header>
    )
}

export default BannerArmaPlan
