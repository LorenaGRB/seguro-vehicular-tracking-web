import React,{Fragment, useContext} from 'react'
import classes from './Gracias.module.scss'
import { UseContext } from '../../Auxiliary/useContext';


function Gracias() {
    const generalData = useContext(UseContext);
    return (
        <Fragment>
            <section className={classes.wrapper}>
                <div className={classes.wrapper__information}>
                    <h2 className={classes.title}> 
                        <span>¡Te damos la bienvenida!</span><br/> 
                        Cuenta con nosotros para proteger tu vehículo
                    </h2>
                    <p className={classes.subtitle}>
                        Te estaremos llamando a tu número de celular para la confirmación de tu cotización de tu Plan Vehícular Tracking a tu número de celular:<br/>
                        <span>{generalData?.userData?.phone}</span>
                    </p>
                </div>
            </section>
        </Fragment>
    )
}

export default Gracias
