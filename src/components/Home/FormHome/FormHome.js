import React from 'react'
import Input from '../../UI/Input'
import Select from '../../UI/Select'
import Button from '../../UI/Button'
import classes from '../../../style/style.module.css'

function Form() {
    const optionsOfSelect = [   { id:'1', select:'DNI'},
                                { id:'2', select:'RUC'}
                            ]
    return (
        <form className={classes.formHome}>
            <div className={classes.formHome__wrapperDNI}>
                <Select
                    id='documentType'
                    component='formHome'
                    options={optionsOfSelect}
                />
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
            <Button
            id='cotizalo'
            component='formHome'
            text='COTÍZALO'
            />
        </form>
    )
}

export default Form
