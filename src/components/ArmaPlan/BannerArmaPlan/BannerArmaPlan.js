import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import classes from "./BannerArmaPlan.module.scss";
import man from '../../../assets/images/armaPlan/man.png';

function BannerArmaPlan() {
    const [plate, setplate] = useState();
    const [brand, setbrand] = useState();
    const [year, setyear] = useState();
    const formHomeDataGet = JSON.parse(localStorage.getItem(`formHome-data-get`));
    const carDataGet = JSON.parse(localStorage.getItem(`carData-data-get`));
    useEffect(() => {
        setplate(formHomeDataGet.data.dataUser.plate);
        setbrand(carDataGet.data.dataUser.CarBrand);
        setyear(carDataGet.data.dataUser.CarYear);
    }, [formHomeDataGet,carDataGet])
    return (
        <header className={classes.bannerArmaPlan}>
            <h2 className={classes.bannerArmaPlan__title}>Mira las coberturas</h2>
            <h3 className={classes.bannerArmaPlan__subtitle}>Conoce las coberturas para tu plan</h3>
            <section className={classes.bannerArmaPlan__informationWrap}>
                <p className={classes.bannerArmaPlan__plate}>{plate}</p>
                <p className={classes.bannerArmaPlan__brand}>{brand} {year} <br/> Golf</p>
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
