import React, { Fragment } from 'react'
import CarData from './CarData/CarData'
import Header from './Header/Header'
import Home from './Home/Home'

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Home />
            <CarData />
        </Fragment>
    )
}

export default Layout