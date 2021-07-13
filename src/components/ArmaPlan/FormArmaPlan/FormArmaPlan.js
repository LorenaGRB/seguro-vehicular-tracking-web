import React,{useState} from 'react'
import classes from './FormArmaPlan.module.scss'
import SecProtegeAuto from './Sections/SecProtegeAuto';
import SecProtegeRodean from './Sections/SecProtegeRodean';
import SecMejoraPlan from './Sections/SecMejoraPlan';

function FormArmaPlan() {
    const [protegeAuto, setprotegeAuto] = useState('disable');
    const [protegeRodean, setprotegeRodean] = useState('disable');
    const [mejoraPlan, setmejoraPlan] = useState('disable');
    const [llantaRob, setllantaRob] = useState(false);
    const [choque, setchoque] = useState(false);
    const [atropello, setatropello] = useState(false);

    const llantaState = ()=> {
        setllantaRob(prevState => !prevState)
    }
    const choqueState = ()=> {
        setchoque(prevState => !prevState)
    }
    const atropelloState = ()=> {
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
    return (
        <form className={classes.wrapper}>
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
        </form>
    )
}

export default FormArmaPlan
