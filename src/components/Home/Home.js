import React from 'react'
import BannerHome from './BannerHome/BannerHome'
import FormHome from './FormHome/FormHome'
import classes from '../../style/style.module.css'
function Home() {
    return (
        <div className={classes.home}>
            <BannerHome/>
            <FormHome />
        </div>
    )
}

export default Home
