import React, {useState,useEffect,useContext} from 'react';
import axios from 'axios';
import { UseContext } from '../../../Auxiliary/useContext';
import {Link} from 'react-router-dom';
import classes from "./BannerArmaPlan.module.scss";
import man from '../../../assets/images/armaPlan/man.png';

function BannerArmaPlan() {
    const generalData = useContext(UseContext);

    const [plate, setplate] = useState();
    const [brand, setbrand] = useState();
    const [year, setyear] = useState();

    async function getData(component,Data) {
        var link = `https://segurovehiculartrack-default-rtdb.firebaseio.com/${component}/${Data}.json` 
        axios.get(link)
        .then(function (response) {
            if(component === 'formHome'){ 
                setplate(response.data.dataUser.plate);
            }
            if(component === 'carData'){
                setyear(response.data.dataUser.carYear);
                setbrand(response.data.dataUser.carBrand); 
            }
        })
        .catch(function (error) {
        })
        .then(function () {
        }); 
    }
    useEffect(() => {
        getData('formHome',generalData.idHomeForm)
            .then(  ()=> {
                return getData('carData',generalData.idCarForm);
            })
        
    }, [generalData])

    return (
        <header className={classes.bannerArmaPlan}>
            <h2 className={classes.bannerArmaPlan__title}>Mira las coberturas</h2>
            <h3 className={classes.bannerArmaPlan__subtitle}>Conoce las coberturas para tu plan</h3>
            <section className={classes.bannerArmaPlan__informationWrap}>
                <p className={classes.bannerArmaPlan__plate}>{plate}</p>
                <p className={classes.bannerArmaPlan__brand}>{brand} {year} <br/> Golf</p>
                <Link
                className={classes.bannerArmaPlan__edit} 
                to = '/seguro-vehicular-tracking/CarData'
                >
                    EDITAR
                </Link>
            </section>
            <img 
            className={classes.bannerArmaPlan__img} 
            src={man} 
            alt='arma tu plan'
            />
        </header>
    )
}

export default BannerArmaPlan
