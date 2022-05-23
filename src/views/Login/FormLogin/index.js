import React, { useState,useContext, useEffect, useRef} from 'react';
import axios from 'axios';
import { UseContext } from '../../../Auxiliary/useContext';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/UI/Input'
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

    const [imageUploaded, setImageUploaded] = useState();
    const [imageId, setImageId] = useState()
    const [isRegistered, setisRegistered] = useState(false)
    const showWidgetCloudinary = (e) => {
        e.preventDefault()
        console.log("showWidgetCloudinary", window.cloudinary);
        window.cloudinary.openUploadWidget(
            {
                cloudName: "dhouvtp2c",
                uploadPreset: "rgku1nr1",
            },
            (err, result) => {
                if (!err && result?.event === "success") {
                const { secure_url, public_id } = result.info;
                setImageUploaded(secure_url);
                setImageId(public_id);
                }
            }
        );
    };

    const messageButton = useRef('INICIAR SESIÓN')
    const [valFormLogin, setvalFormLogin] = useState({
        isValid: false,
        valDocument: true,
        valPhone: true,
        valEmail: true,
        valPassword: true,
        valDniImage: true,
        valDniImageId: true,
        valName: true
    })
    const toastGeneral = {
        position: "top-center",
        autoClose: 3000,
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

        const response = await axios.post(`https://seguro-vehicular-tracking-api.herokuapp.com/api/users/${url}`, dataUser)
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
                email:email,
                password:password,
                name:name,
                dniImage: imageUploaded,
                dniImageId: imageId,
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
            email:email,
            password:password,
            newUser:newUser,
            name:name,
            dniImage: imageUploaded,
            dniImageId: imageId
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
                valDniImage: true,
                valDniImageId: true
            } );

            const isLogin = await sendData(dataToSend);
            if(newUser){
                setisRegistered(true)
                success('El registro fue exitoso, Porfavor Inicie sesión con sus datos')
                history.push('/Login');
            }else if(isLogin){
                history.push('/CarData');
                success('Inicio de sesión exitoso')
            }else {
                error('No se pudo iniciar sesión, pruebe con otra contraseña o correo electrónico')
                history.push('/Login');
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
        <form className={classes.formLogin} style={newUser?{marginTop:'0px'}:{}}onSubmit={submitHandler}>
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
                onClick={showWidgetCloudinary}
                >
                    Choose File
                </button>
            </div>
            }
            {newUser && !valFormLogin.valDniImage && <p className={classes.errorForm}>Tiene que subir su foto de dni.Para que el asesor que se le asigne pueda confirmar los datos proporcionados.</p>}
            {!isRegistered ?<Input 
                id='registro'
                type='checkbox'
                label='Soy nuevo y<a> quiero registrarme para acceder a este beneficio</a>'
                component='formLogin'
                value={newUser}
                onclick={e=>{setnewUser(!newUser)}}
            />:<p style={{color:'#00B2AE'}}>Gracias por registrarse, ahora inicie sesión</p> }
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
