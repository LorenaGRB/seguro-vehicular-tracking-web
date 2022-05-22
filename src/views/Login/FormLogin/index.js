import React, { useState,useContext, useEffect, useRef} from 'react';
import axios from 'axios';
import { UseContext } from '../../../Auxiliary/useContext';
import { Route, Redirect , useHistory } from 'react-router-dom';
import Input from '../../../components/UI/Input'
import Select from '../../../components/UI/Select'
import Button from '../../../components/UI/Button'
import validation from '../../../functions/validationFormLogin'
import classes from './FormLogin.module.scss'

function FormLogin() {
    const optionsOfSelect = ['DNI','RUC'];

    const history = useHistory();
    // const generalData = useContext(UseContext);
    
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [newUser, setnewUser] = useState(false);
    const [name, setName] = useState('');
    const messageButton = useRef('INICIAR SESIÓN')
    const [valFormLogin, setvalFormLogin] = useState({
        isValid: false,
        valEmail: true,
        valPassword: true,
        valName: true
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
    function shapingData (isNew) {
        let dataToSend = {}
        if(isNew){
            dataToSend = {
                email:email,
                password:password,
                name:name
            }
        }else{
            dataToSend = {
                email:email,
                password:password,
            }
        }
        return dataToSend
    }

    function submitHandler (e) {
        e.preventDefault();
        const dataV = {
            email:email,
            password:password,
            newUser:newUser,
            name:name
        };
        const ivalid = validation(dataV);
        setvalFormLogin(ivalid);
        if(ivalid.isValid){
            const dataToSend = shapingData(newUser)
            console.log(dataToSend)
            // sendData(dataToSend);
            setnewUser(false)
            setemail('')
            setpassword('')
            setvalFormLogin( {
                isValid: false,
                valEmail: true,
                valPassword: true,
                valName: true
            } );
            history.push('/seguro-vehicular-tracking/Home');
        }
    }
    
    useEffect(() => {
        if(newUser){
            messageButton.current= 'REGISTRARSE'
        }else{
            messageButton.current= 'INICIAR SESIÓN'
        }
    }, [newUser])
    

    return (
        <form className={classes.formLogin} onSubmit={submitHandler}>
            <h2 className={classes.formLogin__title}>Inicia sesión o Regístrate </h2>
            { newUser && 
                <Input 
                    id='name'
                    type='text'
                    placeholder='Nombre'
                    component='formLogin'
                    value={name}
                    onchange={e=>{setName(e.target.value)}}
                />
            }
            {newUser && !valFormLogin.valName && <p className={classes.errorForm}>Ingrese nombre válido</p>} 

            <Input 
                id='email'
                type='email'
                placeholder='Correo'
                component='formLogin'
                value={email}
                onchange={e=>{setemail(e.target.value)}}
            />
            {!valFormLogin.valEmail&& <p className={classes.errorForm}>Ingrese un correo electrónico válido</p>} 
            <Input 
                id='password'
                type='password'
                placeholder='Contraseña'
                component='formLogin'
                value={password}
                onchange={e=>{setpassword(e.target.value)}}
            />
            {!valFormLogin.valPassword && newUser && <p className={classes.errorForm} >La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.</p>} 
            <Input 
                id='registro'
                type='checkbox'
                label='Soy nuevo y<a> quiero registrarme para acceder a este beneficio</a>'
                component='formLogin'
                value={newUser}
                onclick={e=>{setnewUser(!newUser)}}
            /> 
                <Button
                    id='iniciaSesion'
                    component='formLogin'
                    text={messageButton.current}
                    nextPage='/Home'
                />
                {valFormLogin.isValid && <Route><Redirect to='./Home'/></Route> } 
        </form>
        
    )
}

export default FormLogin
