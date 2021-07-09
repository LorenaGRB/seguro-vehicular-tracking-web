import React, { useState } from 'react'
import Select from '../../UI/Select'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import classes from '../../../style/style.module.css'
import submitHandler from '../../../functions/validationFormHome'
import iconCar from "../../../assets/images/datosAuto/icon-car.svg";

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
            <h2 className={classes.carDataForm__title}>¡Hola, <span>Meyling!</span></h2>
            <h3 className={classes.carDataForm__subtitle}>Completa los datos de tu auto </h3>
            <form className={classes.carDataForm__form} onSubmit={submitHandler}>
                <div className={classes[`carDataForm__select`]}>
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
                    <div className={classes.carDataForm__help}>
                        <div>
                            <p className={classes[`carDataForm__help-title`]}>AYUDA</p>
                            <p className={classes[`carDataForm__help-question`]}>¿No encuentras el modelo?</p>
                            <a className={classes[`carDataForm__help-link`]} href="./">clic aquí</a>
                        </div>
                        <img className={classes[`carDataForm__help-car`]} src={iconCar} alt='Carro'/>
                    </div>
                </div>
                <div>
                    <label className={classes[`carDataForm__radio-title`]}>¿Tu auto es a gas?</label>
                    <div className={classes[`carDataForm__radio`]}>
                        <Input 
                        id='withGas'
                        type='radio'
                        label='Si'
                        component='carDataForm'
                        value={onGas}
                        onclick={e=>{setonGas(!onGas)}}
                        />
                        <Input 
                            id='withoutGas'
                            type='radio'
                            label='No'
                            component='carDataForm'
                            value={onGas}
                            onclick={e=>{setonGas(!onGas)}}
                        />
                    </div>
                </div>
                <div className={classes.carDataForm__buttons}>
                    <p className={classes.carDataForm__buttons}>Indica la suma asegurada</p>
                    <div>
                        <p>MIN $12.500</p>
                        <p>MAX $16,500</p>
                    </div>
                    <div>
                        <button>-</button>
                        <p>$16,500</p>
                        <button>+</button>
                    </div>
                </div>
                <Button
                    id='continuar'
                    component='carDataForm'
                    html='Continuar'
                />
            </form>
        </section>
    )
}

export default CarDataForm
