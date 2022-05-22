import React, {Fragment} from 'react'
import Item from '../../../UI/Item/Item'

function SecProtegeAuto(props) {
    return (
        <Fragment>
            <Item 
            title='Llanta Robada'
            id='llantaRob'
            add={props.add.llantaRob}
            status={props.status.llantaRob}
            text='He salido de casa a las cuatro menos cinco para ir a la 
            academia de ingles de mi pueblo (Sant Cugat, al lado de 
            Barcelona) con mi bici, na llego a la academia que está 
            en el centro del pueblo en una plaza medio-grande y dejo 
            donde siempre la bici atada con una pitón a un sitio de 
            esos de poner las bicis y mucho más'
            />

            <Item 
            title='Choque y/o pasarte la luz roja'
            id='choque'
            add={props.add.choque}
            status={props.status.choque}
            text='He salido de casa a las cuatro menos cinco para ir a la 
            academia de ingles de mi pueblo (Sant Cugat, al lado de 
            Barcelona) con mi bici, na llego a la academia que está 
            en el centro del pueblo en una plaza medio-grande y dejo 
            donde siempre la bici atada con una pitón a un sitio de 
            esos de poner las bicis y mucho más'
            />

            <Item 
            title='Atropello en la vía Evitamiento'
            id='atropello'
            add={props.add.atropello}
            status={props.status.atropello}
            text='He salido de casa a las cuatro menos cinco para ir a la 
            academia de ingles de mi pueblo (Sant Cugat, al lado de 
            Barcelona) con mi bici, na llego a la academia que está 
            en el centro del pueblo en una plaza medio-grande y dejo 
            donde siempre la bici atada con una pitón a un sitio de 
            esos de poner las bicis y mucho más'
            />
        </Fragment>
    )
}

export default SecProtegeAuto
