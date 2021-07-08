import axios from 'axios'
import get from './getData'

function sendData(component,dataUser) {
    axios.post(`https://segurovehiculartrack-default-rtdb.firebaseio.com/${component}.json`, {
                dataUser
            })
            .then(function (response) {
                console.log(response);
                //save response's id
                localStorage.setItem(`${component}-data-sent`, JSON.stringify(response));
            })
            .catch(function (error) {
                console.log(error);
            });

    return (
        //get response's id
        get(component,JSON.parse(localStorage.getItem(`${component}-data-sent`)).data.name)
    )
}

export default sendData
