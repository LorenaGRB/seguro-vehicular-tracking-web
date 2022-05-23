import React, {Fragment} from 'react'
import Item from '../../../../components/UI/Item'

function SecProtegeAuto(props) {
    return (
        <Fragment>
            <Item 
            title='Llanta Robada'
            id='llantaRob'
            add={props.add.llantaRob}
            status={props.status.llantaRob}
            text='Cubre robo de llantas'
            />

            <Item 
            title='Choque y/o pasarte la luz roja'
            id='choque'
            add={props.add.choque}
            status={props.status.choque}
            text='Cubre infracciones de transito y otras multas menores'
            />

            <Item 
            title='Atropello en la vía'
            id='atropello'
            add={props.add.atropello}
            status={props.status.atropello}
            text='Cubre los gastos del seguro si usted atropella a alguien.'
            />
        </Fragment>
    )
}

export default SecProtegeAuto
