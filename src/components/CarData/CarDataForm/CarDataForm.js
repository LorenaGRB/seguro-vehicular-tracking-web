import React, { useState } from 'react'
import Select from '../../UI/Select'
import Input from '../../UI/Input'
import classes from '../../../style/style.module.css'
import submitHandler from '../../../functions/validationFormHome'

function CarDataForm(props) {

    let listBrandCar = ['Audi','Nissan','Toyota','BMW']
    let optionsOfYear = [];
    for (let i = 0; 1900+i < 2021;i++) {
        optionsOfYear[i]=1900+i;
    }
    

    const [carBrand, setcarBrand] = useState('');
    const [carYear, setcarYear] = useState('');
    const [onGas, setonGas] = useState('')
    return (
        <section className={classes.carDataForm}>
            <h2 className={classes.carDataForm__title}>¡Hola, Meyling!</h2>
            <h3 className={classes.carDataForm__subtitle}>Completa los datos de tu auto </h3>
            <form className={classes.carDataForm__form} onSubmit={submitHandler}>
                <div>
                    
                    <Select
                    id='carYear'
                    component='carDataForm'
                    label = 'Año'
                    options={optionsOfYear}
                    value={carYear}
                    onchange={e=>{setcarYear(e.target.value)}}
                />
                    <Select
                    id='carBrand'
                    component='carDataForm'
                    label = 'Marca'
                    options={listBrandCar}
                    value={carBrand}
                    onchange={e=>{setcarBrand(e.target.value)}}
                />
                </div>
                <div>
                    <label>¿Tu auto es a gas?</label>
                    <Input 
                    id='onGas'
                    type='radio'
                    label='Si'
                    component='carDataForm'
                    value={onGas}
                    onclick={e=>{setonGas(!onGas)}}
                    />
                    <Input 
                        id='onGas'
                        type='radio'
                        label='No'
                        component='carDataForm'
                        value={onGas}
                        onclick={e=>{setonGas(!onGas)}}
                    />
                </div>
            </form>
        </section>
    )
}

export default CarDataForm
