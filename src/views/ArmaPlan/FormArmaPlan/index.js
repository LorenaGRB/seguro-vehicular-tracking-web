import React,{useState, useContext} from 'react';
import axios from 'axios';
import { UseContext } from '../../../Auxiliary/useContext';
import {useHistory} from 'react-router-dom';
import classes from './FormArmaPlan.module.scss'
import SecProtegeAuto from './Sections/SecProtegeAuto';
import SecProtegeRodean from './Sections/SecProtegeRodean';
import SecMejoraPlan from './Sections/SecMejoraPlan';
import TotalAmount from './TotalAmount';

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
    const sendData = (dataUser) => {
        axios.post(`https://segurovehiculartrack-default-rtdb.firebaseio.com/ArmaPlan.json`, {
                    dataUser
                })
                .then(function (response) {
                    generalData.setidArmaPlanForm(response.data.name);
                })
                .catch(function (error) {
                });
    }
    function submitHandler (e){
        e.preventDefault();
        const data = {
            llantaRobada: llantaRob,
            choque: choque,
            atropello: atropello,
            amount: amount
        };
        sendData(data);
        history.push('/seguro-vehicular-tracking/Gracias');
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
                    {(protegeRodean==='enable') && <SecProtegeRodean /> }
                    {(mejoraPlan==='enable') && <SecMejoraPlan  />}
                </section>
            </div>
            <TotalAmount amount={amount}/>
        </form>
    )
}

export default FormArmaPlan
