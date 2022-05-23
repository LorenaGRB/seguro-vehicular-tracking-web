import React, {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import { UseContext } from '../../../Auxiliary/useContext';
import {Link} from 'react-router-dom';
import classes from "./BannerArmaPlan.module.scss";
import carrito from '../../../assets/images/armaPlan/carrito.svg';

function BannerArmaPlan() {
    const generalData = useContext(UseContext);
    return (
        <header className={classes.bannerArmaPlan}>
            <h2 className={classes.bannerArmaPlan__title}>Mira las coberturas</h2>
            <h3 className={classes.bannerArmaPlan__subtitle}>Conoce las coberturas para tu plan</h3>
            <section className={classes.bannerArmaPlan__informationWrap}>
                <p className={classes.bannerArmaPlan__plate}>{generalData?.userData?.plate}</p>
                <p className={classes.bannerArmaPlan__brand}>{generalData?.carData?.car?.carBrand} {generalData?.carData?.car?.carYear} <br/> Golf</p>
                <Link
                className={classes.bannerArmaPlan__edit} 
                to = '/seguro-vehicular-tracking/CarData'
                >
                    EDITAR
                </Link>
            </section>
            <img 
            className={classes.bannerArmaPlan__img} 
            src={carrito} 
            alt='arma tu plan'
            />
        </header>
    )
}

export default BannerArmaPlan
