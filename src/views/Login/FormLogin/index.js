import React, { useState,useContext, useEffect, useRef} from 'react';
import axios from 'axios';
import { UseContext } from '../../../Auxiliary/useContext';
import { Route, Redirect , useHistory } from 'react-router-dom';
import Input from '../../../components/UI/Input'
import Select from '../../../components/UI/Select'
import Button from '../../../components/UI/Button'
import validation from '../../../functions/validationFormLogin'
import classes from './FormLogin.module.scss'
import { toast } from 'react-toastify';

function FormLogin() {
    const history = useHistory();
    const generalData = useContext(UseContext);
    const [phone, setphone] = useState('');
    const [plate, setplate] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [newUser, setnewUser] = useState(false);
    const [name, setName] = useState('');
    const [photoReportUrl, setPhotoReportUrl] = useState();
    const [photoName, setPhotoName] = useState();
    const showWidgetPhotoReport = () => {
    //   window.cloudinary.openUploadWidget(
    //     cloudinary_constant("report_photos"),
    //     (err, result) => {
    //       if (!err && result?.event === "success") {
    //         const { secure_url, original_filename, format } = result.info;
    //         setPhotoReportUrl(secure_url);
    //         setPhotoName(`${original_filename}.${format}`);
    //       }
    //     }
    //   );
    };

    const messageButton = useRef('INICIAR SESIÓN')
    const [valFormLogin, setvalFormLogin] = useState({
        isValid: false,
        valDocument: true,
        valPhone: true,
        valPlate: true,
        valEmail: true,
        valPassword: true,
        valName: true
    })
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
    const sendData = async (dataUser) => {
        let status = false;
        let url = ''
        if(newUser){url = 'create'}else{ url= 'login'}

        const response = await axios.post(`http://localhost:5001/api/users/${url}`, dataUser)
        .catch(function (error) { 
            status=false
        });
        if(response){
            localStorage.setItem('token', response.data.token);
            generalData.setUserData(response.data.user);
            status=true;
        }
        return status
    }
    function shapingData (isNew) {
        let dataToSend = {}
        if(isNew){
            dataToSend = {
                phone:phone,
                plate:plate,
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

    async function submitHandler (e) {
        e.preventDefault();
        const dataV = {
            phone:phone,
            plate:plate,
            email:email,
            password:password,
            newUser:newUser,
            name:name
        };
        const ivalid = validation(dataV);
        setvalFormLogin(ivalid);
        if(ivalid.isValid){
            const dataToSend = shapingData(newUser)
            setnewUser(false)
            setemail('')
            setpassword('')
            setvalFormLogin( {
                isValid: false,
                valEmail: true,
                valPassword: true,
                valName: true,
                valPhone: true,
                valPlate: true,
            } );

            const isLogin = await sendData(dataToSend);
            if(newUser){
                success('El registro fue exitoso, Porfavor Inicie sesión con sus datos')
                history.push('/seguro-vehicular-tracking/Login');
            }else if(isLogin){
                history.push('/seguro-vehicular-tracking/CarData');
                success('Inicio de sesión exitoso')
            }else {
                error('No se pudo iniciar sesión, pruebe con otra contraseña o correo electrónico')
                history.push('/seguro-vehicular-tracking/Login');
            }
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
            <h2 className={classes.formLogin__title}>Ingresa tus datos </h2>
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
            {newUser && 
                <Input 
                id='phone'
                type='text'
                placeholder='Celular'
                component='formLogin'
                value={phone}
                onchange={e=>{setphone(e.target.value)}}
            />
            }
            {newUser && !valFormLogin.valPhone && <p className={classes.errorForm}>Ingrese un numero de celular correcto, debe tener 9 números</p>}
            {newUser && 
                <Input 
                id='plate'
                type='text'
                placeholder='placa'
                component='formLogin'
                value={plate}
                onchange={e=>{setplate(e.target.value)}}
            />
            }                    
            {newUser && !valFormLogin.valPlate && <p className={classes.errorForm}>Ingrese una placa correcta: En total 6 dígitos entre letras y números</p>}
            {newUser && 
            <div>
                <p>Porfavor suba una foto de su dni</p>
                <button
                style={{
                    backgroundColor: "#FFFF",
                    color: "#000",
                    width: "10srem",
                    marginRight: "10px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontFamily: "Roboto-bold",
                }}
                onClick={showWidgetPhotoReport}
                >
                    Choose File
                </button>
            </div>
            }

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
                    nextPage='/CarData'
                />
        </form>
        
    )
}

export default FormLogin
