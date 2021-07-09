import React, { useState} from 'react'
import Input from '../../UI/Input'
import Select from '../../UI/Select'
import Button from '../../UI/Button'
import sendData from '../../../functions/sendData'
import validation from '../../../functions/validationFormHome'
import classes from '../../../style/style.module.css'

function FormHome() {
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
    const optionsOfSelect = ['DNI','RUC']
    function submitHandler (e) {
        e.preventDefault();
        const dataV = {
            documentType:documentType,
            document:document,
            phone:phone,
            plate:plate,
            tyc:tyc
        };
        console.log (dataV)
        const ivalid = validation(dataV);
        setvalFormHome(ivalid);
        if(ivalid.isValid){
            //Send data
            sendData('formHome',dataV);
            //Reset
            setdocument('')
            setphone('')
            setplate('')
            setdocumentType('')
            setvalFormHome( {
                isValid: false,
                valDocumentType: true,
                valDocument: true,
                valPhone: true,
                valPlate: true,
                valTyc: true
            } )
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
                    onchange={e=>{setdocumentType(e.target.value); console.log(e.target.value)}}
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
            {valFormHome.valDocumentType && !valFormHome.valDocument && <p className={classes.errorForm}>Ingresa un documento correcto</p>}
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
            />
        </form>
    )
}

export default FormHome
