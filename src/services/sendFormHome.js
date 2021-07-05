import axios from 'axios'
import get from './getInformation'

function sendFormHome(dataUser) {
    axios.post('https://segurovehiculartrack-default-rtdb.firebaseio.com/formHome.json', {
                name:'Juan',
                documentType:dataUser[0],
                document:dataUser[1],
                phone:dataUser[2],
                plate:dataUser[3],
                tyc:dataUser[4],
            })
            .then(function (response) {
                console.log(response);
                localStorage.setItem('formHome-data-sent', JSON.stringify(response));
                
            })
            .catch(function (error) {
                console.log(error);
            });
    return (
        //console.log(JSON.parse(localStorage.getItem('formHome-data-sent')).data.name )
        get(JSON.parse(localStorage.getItem('formHome-data-sent')))
    )
}

export default sendFormHome
