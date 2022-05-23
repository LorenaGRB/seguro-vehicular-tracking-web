import React, { useState, useContext} from 'react';
import axios from 'axios';
import { UseContext } from '../../../Auxiliary/useContext';
import {useHistory} from 'react-router-dom';
import Select from '../../../components/UI/Select';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import classes from './CarDataForm.module.scss';
import { toast } from 'react-toastify';

function CarDataForm(props) {
    let listBrandCar = ['Audi','Nissan','Toyota','BMW','Mercedes-Benz','Lexus','Renault','Ford','Opel','Seat']
    let optionsOfYear = [];
    for (let i = 0; 2021-i > 1900;i++) {
        optionsOfYear[i]=2021-i;
    }
    
    const history = useHistory();
    const generalData = useContext(UseContext);

    const [insuredAmount, setinsuredAmount] = useState(16.5);
    const [carBrand, setcarBrand] = useState(listBrandCar[0]);
    const [carYear, setcarYear] = useState(optionsOfYear[0]);
    const [onGas, setonGas] = useState(false);

    const toastGeneral = {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    const success = (message) => toast.success(message,toastGeneral);
    const error = (message) => toast.error(message, toastGeneral);

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
    const sendData = async (dataCar) => {
        const token = localStorage.getItem('token');
        let status = false;
        const headers = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.post(`https://seguro-vehicular-tracking-api.herokuapp.com/api/data/car/create/${generalData?.userData?.email}`, dataCar, headers)
        .catch(function (error) { 
            status=false
        });
        if (response?.status === 201 || response?.status === 200 ) {
            generalData.setCarData(response.data);
            status = true;
        } 
        return status
    }

    async function submitHandler (e) {
        e.preventDefault();
        const data = {
            email: generalData?.userData?.email,
            car: {
                insuredAmount: insuredAmount,
                carBrand: carBrand,
                carYear: carYear,
                onGas: onGas
            }
        };
        const isOk = await sendData(data);
        if(isOk){
            success('La información se guardó con éxito')
            history.push('/seguro-vehicular-tracking/ArmaPlan');
        }else{
            error('Ha ocurrido un error, porfavor vuelva a iniciar sesión')
            history.push('/seguro-vehicular-tracking/Login');
        }
    }
    return (
        <section className={classes.carDataForm}>
            <h2 className={classes.carDataForm__title}>¡Hola, <span>{generalData?.userData?.name}</span></h2>
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
                            <p className={classes[`carDataForm__help-link`]} >llámanos al (01) 522 6001</p>
                        </div>
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
