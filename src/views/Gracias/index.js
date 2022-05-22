import React,{Fragment} from 'react'
import classes from './Gracias.module.scss'
import Button from '../../components/UI/Button'
import Footer from '../../components/Footer'

function Gracias() {
    return (
        <Fragment>
            <section className={classes.wrapper}>
                <picture className={classes.img} alt='hombre feliz'/>
                <div className={classes.wrapper__information}>
                    <h2 className={classes.title}> 
                        <span>¡Te damos la bienvenida!</span><br/> 
                        Cuenta con nosotros para proteger tu vehículo
                    </h2>
                    <p className={classes.subtitle}>
                        Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:<br/>
                        <span>joel.sanchez@gmail.com </span>
                    </p>
                    <Button component='gracias' id='comoUsarMiSeguro' text='cómo usar mi seguro'/>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Gracias
