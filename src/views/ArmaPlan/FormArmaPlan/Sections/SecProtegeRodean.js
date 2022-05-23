import React, {Fragment} from 'react'
import Item from '../../../../components/UI/Item'

function SecProtegeRodean(props) {
    return (
        <Fragment>
            <Item 
            title='Muerte de pasajeros y conductor'
            id='muerte'
            add={props.add.muerte}
            status={props.status.muerte}
            text='Cubre los gastos de cepelio, con una cobertura de $100 000 dólares americanos'
            />
            <Item 
            title='Lesiones graves de pasajeros y conductor'
            id='lesiones'
            add={props.add.lesiones}
            status={props.status.lesiones}
            text='Cubre los gastos médicos del conductor del vehículo y los pasajeros abordo'
            />
        </Fragment>
    )
}

export default SecProtegeRodean
