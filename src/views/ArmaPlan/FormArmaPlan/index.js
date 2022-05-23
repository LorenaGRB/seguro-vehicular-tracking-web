import React,{ useState, useContext } from 'react';
import axios from 'axios';
import { UseContext } from '../../../Auxiliary/useContext';
import {useHistory} from 'react-router-dom';
import classes from './FormArmaPlan.module.scss'
import SecProtegeAuto from './Sections/SecProtegeAuto';
import SecProtegeRodean from './Sections/SecProtegeRodean';
import SecMejoraPlan from './Sections/SecMejoraPlan';
import TotalAmount from './TotalAmount';
import { toast } from 'react-toastify';


function FormArmaPlan() {
    const history = useHistory();
    const generalData = useContext(UseContext);
    
    const [protegeAuto, setprotegeAuto] = useState('enable');
    const [protegeRodean, setprotegeRodean] = useState('disable');
    const [mejoraPlan, setmejoraPlan] = useState('disable');
    const [llantaRob, setllantaRob] = useState(false);
    const [choque, setchoque] = useState(false);
    const [atropello, setatropello] = useState(false);
    const [amount, setamount] = useState(20);
    const [muerte, setmuerte] = useState(false);
    const [lesiones, setlesiones] = useState(false)
    const [carRob, setcarRob] = useState(false)
    
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

    const carRobState = ()=> {
        let amountOfmoney=0;
        amountOfmoney=muerte?-35:35;
        setamount(prevState => prevState + amountOfmoney);
        setcarRob(prevState => !prevState );
    }
    const muerteState = ()=> {
        let amountOfmoney=0;
        amountOfmoney=muerte?-35:35;
        setamount(prevState => prevState + amountOfmoney);
        setmuerte(prevState => !prevState );
    }
    const lesionesState = ()=> {
        let amountOfmoney=0;
        amountOfmoney=lesiones?-15:15;
        setamount(prevState => prevState + amountOfmoney);
        setlesiones(prevState => !prevState );
    }

    const llantaState = ()=> {
        let amountOfmoney=0;
        amountOfmoney=llantaRob?-15:15;
        setamount(prevState => prevState + amountOfmoney);
        setllantaRob(prevState => !prevState );
    }
    const choqueState = ()=> {
        let amountOfmoney=0;
        amountOfmoney=choque?-20:20;
        setamount(prevState => prevState + amountOfmoney);
        setchoque(prevState => !prevState)

    }
    const atropelloState = ()=> {
        let amountOfmoney=0;
        amountOfmoney=atropello?-50:50;
        setamount(prevState => prevState + amountOfmoney);
        setatropello(prevState => !prevState)
    }

    function changeField (e,field){
        e.preventDefault();
        switch (field) {
            case 'protegeAuto':
                setprotegeAuto('enable');
                setprotegeRodean('disable');
                setmejoraPlan('disable');
                break;
            case 'protegeRodean':
                setprotegeAuto('disable');
                setprotegeRodean('enable');
                setmejoraPlan('disable');
                break;
            case 'mejoraPlan':
                setprotegeAuto('disable');
                setprotegeRodean('disable');
                setmejoraPlan('enable');
                break;
            default:
                break;
        }        
        return 
    }
    const sendData = async (data) => {
        const token = localStorage.getItem('token');
        let status = false;
        const headers = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.post(`https://seguro-vehicular-tracking-api.herokuapp.com/api/data/insurance/create/${generalData?.carData?._id}`, data, headers)
        .catch(function (error) { 
            status=false
        });
        if (response?.status === 201 || response?.status === 200 ) {
            generalData.setCarData(response.data);
            status = true;
        } 
        return status
    }
    async function submitHandler (e){
        e.preventDefault();
        const data = {
            email:generalData?.userData?.email,
            idCar:generalData?.carData?._id,
            price :{
                llantaRobada: llantaRob,
                choque: choque,
                atropello: atropello,
                muerte:muerte,
                lesiones:lesiones,
                carRobo:carRob,
                amount: amount,
            }
        };
        const isOk = await sendData(data);
        if(isOk){
            success('La información se guardó con éxito')
            history.push('/seguro-vehicular-tracking/Gracias');
        }else{
            error('Ha ocurrido un error, porfavor vuelva a iniciar sesión')
            history.push('/seguro-vehicular-tracking/Login');
        }
    }
    return (
        <form className={classes.wrapper} onSubmit={(e)=>submitHandler(e)}>
            <div className={classes.wrapper__left}>
                <h2 className={classes.title}>Agrega o quita coberturas</h2>
                <nav className={classes.navbar}>
                    <button 
                    className={`${classes.navbar__protegeAuto} ${classes[protegeAuto]}`}
                    onClick={(e)=>{changeField(e,'protegeAuto')}}
                    >
                        Protege a tu auto
                    </button>

                    <button 
                    className={`${classes.navbar__protegeRodean} ${classes[protegeRodean]}`}
                    onClick={(e)=>{changeField(e,'protegeRodean')}}
                    >
                        Protege a los que te rodean
                    </button>

                    <button 
                    className={`${classes.navbar__mejoraPlan} ${classes[mejoraPlan]}`}
                    onClick={(e)=>{changeField(e,'mejoraPlan')}}
                    >
                        Mejora tu plan
                    </button> 
                </nav>
                <section>
                    {(protegeAuto==='enable') && 
                    <SecProtegeAuto 
                    add={{llantaRob:llantaState, choque:choqueState,atropello:atropelloState}}
                    status={{llantaRob:llantaRob,choque:choque,atropello:atropello}}
                    /> }
                    {(protegeRodean==='enable') && 
                    <SecProtegeRodean 
                    add={{muerte:muerteState, lesiones:lesionesState}}
                    status={{muerte:muerte,lesiones:lesiones}}
                    /> }
                    {(mejoraPlan==='enable') && 
                    <SecMejoraPlan  
                    add={{carRob:carRobState}}
                    status={{carRob:carRob}}
                    />}
                </section>
            </div>
            <TotalAmount amount={amount}/>
        </form>
    )
}

export default FormArmaPlan
