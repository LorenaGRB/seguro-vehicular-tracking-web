import React, { useState} from 'react'
import Input from '../../UI/Input'
import Select from '../../UI/Select'
import Button from '../../UI/Button'
import sendFormHome from '../../../services/sendFormHome'
import classes from '../../../style/style.module.css'

function FormHome() {
    const [documentType, setdocumentType] = useState('DNI');
    const [document, setdocument] = useState('');
    const [phone, setphone] = useState('');
    const [plate, setplate] = useState('');
    const [tyc, settyc] = useState(false);

    const [validDocument, setvalidDocument] = useState(true);
    const [validPhone, setvalidPhone] = useState(true);
    const [validPlate, setvalidPlate] = useState(true);
    const [validTyc, setvalidTyc] = useState(true);

    // const [dataUser, setdataUser] = useState('');

    const optionsOfSelect = [   { id:'1', select:'DNI'},
                                { id:'2', select:'RUC'}
                            ]
    var dniRegex=/^[0-9]{8}$/g;   
    var rucRegex=/^[0-9]{11}$/g;
    var phoneRegex=/^[0-9]{9}$/g;  
    var plateRegex=/^[0-9a-zA-Z]{6}$/gm;

    const validation = (dataV) => {
        let validation = true;
        const [documentType,document,phone,plate,tyc] = dataV;

        if((documentType==='DNI' && dniRegex.test(document))||(documentType==='RUC' && rucRegex.test(document))) {
            setvalidDocument(true);
        }else {
            setvalidDocument(false); 
            validation = false;
        }

        if(phoneRegex.test(phone)){
            setvalidPhone(true);
        }else {
            setvalidPhone(false); 
            validation = false;
        }

        if(plateRegex.test(plate)){
            setvalidPlate(true);
        } else {
            setvalidPlate(false); 
            validation = false;
        }

        if(tyc){
            setvalidTyc(true);
        } else {
            setvalidTyc(false); 
            validation = false;
        }
        return validation;
    }

    
    const submitHandler = (e)=> {
        e.preventDefault();
        const dataV = [documentType,document,phone,plate,tyc];
        const isvalid= validation(dataV);
        console.log(dataV)
        if(isvalid){
            sendFormHome(dataV);
            setdocument('')
            setphone('')
            setplate('')
            setdocumentType('DNI')
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
            {!validDocument && <p className={classes.errorForm}>Ingresa un documento correcto</p>}
            <Input 
                id='phone'
                type='text'
                placeholder='Celular'
                component='formHome'
                value={phone}
                onchange={e=>{setphone(e.target.value)}}
            />
            {!validPhone && <p className={classes.errorForm}>Ingrese un numero de celular correcto</p>}
            <Input 
                id='plate'
                type='text'
                placeholder='placa'
                component='formHome'
                value={plate}
                onchange={e=>{setplate(e.target.value)}}
            />
            {!validPlate && <p className={classes.errorForm}>Ingrese una placa correcta</p>}
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
            {!validTyc&& <p className={classes.errorForm}>Los terminos y condiciones deben ser aceptados</p>}
            <Button
                id='cotizalo'
                component='formHome'
                text='COTÍZALO'
            />
        </form>
    )
}

export default FormHome
