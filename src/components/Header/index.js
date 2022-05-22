import React from 'react'
import classes from './Header.module.scss'
const Header = () => {
    return (
        <header className={classes.header}>
            <p></p>
            <p className={classes.header__callus}>Llámanos</p>
            <div className={classes.header__desktop}>
                <p className={classes.header__question}>¿Tienes alguna duda?</p>
                <p className={classes.header__numberPhone}>(01) 522 6001</p>
            </div>
        </header>
    )
}
export default Header