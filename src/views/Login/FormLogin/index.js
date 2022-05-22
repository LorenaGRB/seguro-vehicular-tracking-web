import React, { useState,useContext} from 'react';
import axios from 'axios';
import { UseContext } from '../../../components/Auxiliary/useContext';
import { Route, Redirect , useHistory } from 'react-router-dom';
import Input from '../../../components/UI/Input/Input'
import Select from '../../../components/UI/Select/Select'
import Button from '../../../components/UI/Button/Button'
// import validation from '../../../functions/validationFormLogin'
import classes from './FormLogin.module.scss'

function FormLogin() {
    const optionsOfSelect = ['DNI','RUC'];

    const history = useHistory();
    // const generalData = useContext(UseContext);
    
    const [documentType, setdocumentType] = useState('DNI');
    const [document, setdocument] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [tyc, settyc] = useState(false);

    const [valFormLogin, setvalFormLogin] = useState({
        isValid: false,
        valDocument: true,
        valPhone: true,
        valPlate: true,
        valTyc: true
    })

    // const sendData = (dataUser) => {
    //     axios.post(`https://segurovehiculartrack-default-rtdb.firebaseio.com/formLogin.json`, {
    //                 dataUser
    //             })
    //             .then(function (response) {
    //                 generalData.setidHomeForm(response.data.name);
    //             })
    //             .catch(function (error) {
    //             });
    // }

    function submitHandler (e) {
        e.preventDefault();
    //     const dataV = {
    //         documentType:documentType,
    //         document:document,
    //         email:email,
    //         password:password,
    //         tyc:tyc
    //     };
    //     const ivalid = validation(dataV);
    //     setvalFormLogin(ivalid);
    //     if(ivalid.isValid){
    //         sendData(dataV);
    //         setdocument('')
    //         setemail('')
    //         setpassword('')
    //         setdocumentType('DNI')
    //         setvalFormLogin( {
    //             isValid: false,
    //             valDocument: true,
    //             valPhone: true,
    //             valPlate: true,
    //             valTyc: true
    //         } );
    //         history.push('/seguro-vehicular-tracking/CarData');
    //     }
    }
    
    return (
        <form className={classes.formLogin} onSubmit={submitHandler}>
            <h2 className={classes.formLogin__title}>Inicia sesión para poder acceder a este beneficio</h2>
            <Input 
                id='email'
                type='email'
                placeholder='Correo'
                component='formLogin'
                value={email}
                onchange={e=>{setemail(e.target.value)}}
            />
            {/* {!valFormLogin.valPhone && <p className={classes.errorForm}>Ingrese su correo electrónico</p>} */}
            <Input 
                id='password'
                type='password'
                placeholder='Contraseña'
                component='formLogin'
                value={password}
                onchange={e=>{setpassword(e.target.value)}}
            />
            {/* {!valFormLogin.valPlate && <p className={classes.errorForm}>Ingrese su contraseña</p>} */}
            <Input 
                id='registro'
                type='checkbox'
                label='Soy nuevo y<a> quiero registrarme para acceder a este beneficio</a>'
                component='formLogin'
                value={tyc}
                onclick={e=>{settyc(!tyc)}}
            /> 
            {/* {!valFormLogin.valTyc && <p className={classes.errorForm}>Los terminos y condiciones deben ser aceptados</p>} */}
                <Button
                    id='iniciaSesion'
                    component='formLogin'
                    text='INICIAR SESIÓN'
                    nextPage='/Home'
                />
                {/* {valFormLogin.isValid && <Route><Redirect to='./Home'/></Route> } */}
        </form>
        
    )
}

export default FormLogin
