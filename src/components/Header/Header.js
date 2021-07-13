import React from 'react'
import logo from '../../assets/images/header/logo.svg'
import classes from './Header.module.scss'
const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} alt='logo'/>
            <p className={classes.header__callus}>Llámanos</p>
            <div className={classes.header__desktop}>
                <p className={classes.header__question}>¿Tienes alguna duda?</p>
                <p className={classes.header__numberPhone}>(01) 411 6001</p>
            </div>
        </header>
    )
}
export default Header