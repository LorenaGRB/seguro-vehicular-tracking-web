import React from 'react'
import classes from './BannerHome.module.scss'

function Banner() {
    return (
        <section className={classes.bannerHome}>
            <div className={classes.bannerHome__textWrap}>
                <h3 className={classes.bannerHome__subtitle}>¡NUEVO!</h3>
                <h2 className={classes.bannerHome__title}>Seguro Vehicular <span>Tracking</span></h2>
                <h4 className={classes.bannerHome__message}>Cuentanos donde le haras seguimiento a tu seguro</h4>
            </div>
            <picture className={classes.bannerHome__image}></picture>
        </section>
    )
}

export default Banner
