import React from 'react'
import BannerLogin from './BannerLogin'
import FormLogin from './FormLogin'
import classes from './Login.module.scss'

function Login() {
    return (
        <div className={classes.login}>
            <BannerLogin />
            <FormLogin />
        </div>
    )
}

export default Login
