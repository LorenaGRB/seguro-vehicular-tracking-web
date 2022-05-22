import React from 'react'
import BannerHome from './BannerHome/BannerHome'
import FormHome from './FormHome'
import classes from './Home.module.scss'
function Home() {
    return (
        <div className={classes.home}>
            <BannerHome/>
            <FormHome />
        </div>
    )
}

export default Home
