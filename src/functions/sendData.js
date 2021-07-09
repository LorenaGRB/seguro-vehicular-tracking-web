import axios from 'axios'
import getData from './getData'

function sendData(component,dataUser) {
    axios.post(`https://segurovehiculartrack-default-rtdb.firebaseio.com/${component}.json`, {
                dataUser
            })
            .then(function (response) {
                console.log(response);
                //save response's id
                localStorage.setItem(`${component}-data-sent`, JSON.stringify(response));
                getData(component,JSON.parse(localStorage.getItem(`${component}-data-sent`)));
            })
            .catch(function (error) {
                console.log(error);
            });
}

export default sendData
