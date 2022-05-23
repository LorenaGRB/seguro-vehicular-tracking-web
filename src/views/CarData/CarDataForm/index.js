import React, { useState, useContext} from 'react';
import axios from 'axios';
import { UseContext } from '../../../Auxiliary/useContext';
import {useHistory} from 'react-router-dom';
import Select from '../../../components/UI/Select';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import classes from './CarDataForm.module.scss';
import iconCar from "../../../assets/images/datosAuto/icon-car.svg";

function CarDataForm(props) {

    let listBrandCar = ['Audi','Nissan','Toyota','BMW']
    let optionsOfYear = [];
    for (let i = 0; 2021-i > 1900;i++) {
        optionsOfYear[i]=2021-i;
    }
    
    const history = useHistory();
    const generalData = useContext(UseContext);
    console.log('generalData desde carDta', generalData)
    const [insuredAmount, setinsuredAmount] = useState(16.5);
    const [carBrand, setcarBrand] = useState(listBrandCar[0]);
    const [carYear, setcarYear] = useState(optionsOfYear[0]);
    const [onGas, setonGas] = useState(false);

    const lessAmount = (e) =>{
        e.preventDefault();
        if(insuredAmount > 12.6){
            setinsuredAmount (prevAmount => Math.round(prevAmount*1000 - 100)/1000)
        }
    }
    const moreAmount = (e) =>{
        e.preventDefault();
        if(insuredAmount < 16.5){
            setinsuredAmount (prevAmount =>  Math.round(prevAmount*1000 - 100)/1000)
        }
    }
    const sendData = (dataUser) => {
        axios.post(`https://segurovehiculartrack-default-rtdb.firebaseio.com/carData.json`, {
                    dataUser
                })
                .then(function (response) {
                    generalData.setidCarForm(response.data.name);
                })
                .catch(function (error) {
                });
    }

    function submitHandler (e) {
        e.preventDefault();
        const data = {
            insuredAmount: insuredAmount,
            carBrand: carBrand,
            carYear: carYear,
            onGas: onGas
        };
        sendData(data);
        history.push('/seguro-vehicular-tracking/ArmaPlan');
    }
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
                            defaultValue={optionsOfYear[0]}
                            onchange={e=>{setcarYear(e.target.value)}}
                        />
                        <Select
                            id='carBrand'
                            component='carDataForm'
                            label = 'Marca'
                            options={listBrandCar}
                            value={carBrand}
                            defaultValue={listBrandCar[0]}
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
                <div className={classes[`carDataForm__radio-wrapper`]}>
                    <label className={classes[`carDataForm__radio-title`]}>¿Tu auto es a gas?</label>
                    <div className={classes[`carDataForm__radio`]}>
                        <Input 
                            id='si'
                            type='radio'
                            label='Si'
                            component='carDataForm'
                            name='onGas'
                            value={true}
                            defaultChecked = {false}
                            onclick={e=>{setonGas(!onGas)}}
                        />
                        <Input 
                            id='no'
                            type='radio'
                            label='No'
                            component='carDataForm'
                            name='onGas'
                            value={false}
                            defaultChecked = {true}
                            onclick={e=>{setonGas(!onGas)}}
                            checked
                        />
                    </div>
                </div>
                <div className={classes.carDataForm__buttons}>
                    <div>
                        <p className={classes[`carDataForm__buttons-title`]}>
                            Indica la suma asegurada
                        </p>
                        <div className={classes[`carDataForm__buttons-subtitle`]} >
                            MIN $12.500  &nbsp;   <span>|</span>  &nbsp; MAX $16,500
                        </div>
                    </div>
                    <div className={classes[`carDataForm__buttons-amountwrap`]}>
                        <button 
                            className={classes[`carDataForm__buttons-less`]}
                            onClick={lessAmount}
                        >
                            _
                        </button>
                        <p className={classes[`carDataForm__buttons-amount`]}>
                            ${insuredAmount.toFixed(3)}
                        </p>
                        <button 
                            className={classes[`carDataForm__buttons-more`]}
                            onClick={moreAmount}>
                                +
                        </button>
                    </div>
                </div>
                <Button
                    id='continuar'
                    component='carDataForm'
                    text='CONTINUAR'
                />
            </form>
        </section>
    )
}

export default CarDataForm
