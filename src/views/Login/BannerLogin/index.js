import React from 'react'
import classes from './BannerLogin.module.scss'

function Banner() {
    return (
        <section className={classes.BannerLogin}>
            <div className={classes.BannerLogin__textWrap}>
                <h3 className={classes.BannerLogin__subtitle}>¡NUEVO!</h3>
                <h2 className={classes.BannerLogin__title}>Seguro Vehicular <span>Tracking</span></h2>
                <h4 className={classes.BannerLogin__message}>Cuentanos donde le haras seguimiento a tu seguro</h4>
            </div>
        </section>
    )
}

export default Banner
