import React, { useState } from 'react'
import classes from './Item.module.scss'

function Item(props) {
    const [show, setshow] = useState(false);
    let showState = show ? 'enable' : 'disable';
    function isshow(e) {
        e.preventDefault();
        setshow(prevShow=> !prevShow);
    }

    function isadd(e) {
        props.add();
    }
    return (
        <div className={classes[`${props.id}`]}>
            <div className={classes[`${props.id}__header`]} >
                <span className={classes[`${props.id}__img`]}/>
                <h4 className={classes[`${props.id}__title`]}>{props.title}</h4>
            </div>
            <div  className={classes[`${props.id}__switch`]} >
                <input 
                onClick={ () => {isadd()}}
                type="checkbox"
                defaultChecked={props.status}
                className={classes[`${props.id}__switch-btn`]} 
                />
            </div>
            <div className={classes[`${props.id}__isShow`]}>
                {showState &&<p className={classes[`${props.id}__text-${showState}`]}>
                    {props.text}
                </p>}
                <button 
                onClick={(e) => {isshow(e)}} 
                className={classes[`${props.id}__isShow-${showState}`]}
                />
            </div>
        </div>
    )
}

export default Item
