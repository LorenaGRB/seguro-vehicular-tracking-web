import React, {Fragment} from 'react'
import Item from '../../../../components/UI/Item'


function SecMejoraPlan(props) {
    return (
        <Fragment>
            <Item 
            title='Robo del vehículo'
            id='carRob'
            add={props.add.carRob}
            status={props.status.carRob}
            text='Cubre el costo del robo del vehiculo hasta por un monto de $150 000 dólares americanos'
            />
        </Fragment>
    )
}

export default SecMejoraPlan
