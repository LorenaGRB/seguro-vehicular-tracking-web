import React, { useState,useContext} from 'react';
import axios from 'axios';
import { UseContext } from '../../Auxiliary/useContext';
import { Route, Redirect , useHistory } from 'react-router-dom';
import Input from '../../UI/Input/Input'
import Select from '../../UI/Select/Select'
import Button from '../../UI/Button/Button'
import validation from '../../../functions/validationFormHome'
import classes from './FormHome.module.scss'

function FormHome() {
    const optionsOfSelect = ['DNI','RUC'];

    const history = useHistory();
    const generalData = useContext(UseContext);
    
    const [documentType, setdocumentType] = useState('DNI');
    const [document, setdocument] = useState('');
    const [phone, setphone] = useState('');
    const [plate, setplate] = useState('');
    const [tyc, settyc] = useState(false);

    const [valFormHome, setvalFormHome] = useState({
        isValid: false,
        valDocument: true,
        valPhone: true,
        valPlate: true,
        valTyc: true
    })

    const sendData = (dataUser) => {
        axios.post(`https://segurovehiculartrack-default-rtdb.firebaseio.com/formHome.json`, {
                    dataUser
                })
                .then(function (response) {
                    generalData.setidHomeForm(response.data.name);
                })
                .catch(function (error) {
                });
    }

    function submitHandler (e) {
        e.preventDefault();
        const dataV = {
            documentType:documentType,
            document:document,
            phone:phone,
            plate:plate,
            tyc:tyc
        };
        const ivalid = validation(dataV);
        setvalFormHome(ivalid);
        if(ivalid.isValid){
            sendData(dataV);
            setdocument('')
            setphone('')
            setplate('')
            setdocumentType('DNI')
            setvalFormHome( {
                isValid: false,
                valDocument: true,
                valPhone: true,
                valPlate: true,
                valTyc: true
            } );
            history.push('/seguro-vehicular-tracking/CarData');
        }
    }
    
    return (
        <form className={classes.formHome} onSubmit={submitHandler}>
            <h2 className={classes.formHome__title}>Déjanos tus datos</h2>
            <div className={classes.formHome__wrapperDNI}>
                <Select
                    id='documentType'
                    component='formHome'
                    options={optionsOfSelect}
                    value={documentType}
                    onchange={e=>{setdocumentType(e.target.value)}}
                />
                <Input 
                    id='document'
                    type='text'
                    placeholder='Nro. de doc'
                    component='formHome'
                    value={document}
                    onchange={e=>{setdocument(e.target.value)}}
                />
            </div>
            {!valFormHome.valDocument && <p className={classes.errorForm}>Ingresa un documento correcto</p>}
            <Input 
                id='phone'
                type='text'
                placeholder='Celular'
                component='formHome'
                value={phone}
                onchange={e=>{setphone(e.target.value)}}
            />
            {!valFormHome.valPhone && <p className={classes.errorForm}>Ingrese un numero de celular correcto</p>}
            <Input 
                id='plate'
                type='text'
                placeholder='placa'
                component='formHome'
                value={plate}
                onchange={e=>{setplate(e.target.value)}}
            />
            {!valFormHome.valPlate && <p className={classes.errorForm}>Ingrese una placa correcta</p>}
            <Input 
                id='tyc'
                type='checkbox'
                label='Acepto la 
                    <a>Política de Protecciòn de Datos 
                    Personales</a> y los <a>Términos y 
                    Condiciones.</a>'
                component='formHome'
                value={tyc}
                onclick={e=>{settyc(!tyc)}}
            />
            {!valFormHome.valTyc && <p className={classes.errorForm}>Los terminos y condiciones deben ser aceptados</p>}
            
                <Button
                    id='cotizalo'
                    component='formHome'
                    text='COTÍZALO'
                    nextPage='/CarData'
                />
                {valFormHome.isValid && <Route><Redirect to='./CarData'/></Route> }
        </form>
        
    )
}

export default FormHome
