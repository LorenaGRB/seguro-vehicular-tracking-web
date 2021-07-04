import React from 'react'
import Input from '../../UI/Input'
import classes from '../../../style/style.module.css'

function Form() {
    return (
        <form className={classes.formHome}>
            <div className={classes.formHome__wrapperDNI}>
                <div>DNI</div>
                <Input 
                    id='document'
                    type='number'
                    placeholder='Nro. de doc'
                    component='formHome'
                />
            </div>
            <Input 
                id='phone'
                type='number'
                placeholder='Celular'
                component='formHome'
            />
            <Input 
                id='placa'
                type='text'
                placeholder='Placa'
                component='formHome'
            />
            <Input 
                id='tyc'
                type='checkbox'
                label='Acepto la 
                    <a>Política de Protecciòn de Datos 
                    Personales</a> y los <a>Términos y 
                    Condiciones.</a>'
                component='formHome'
            />
        </form>
    )
}

export default Form
