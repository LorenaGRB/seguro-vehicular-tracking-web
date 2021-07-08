
import axios from 'axios'

function sendFormHome(data,component) {
    var link = '';
    if(component){ 
        link = `https://segurovehiculartrack-default-rtdb.firebaseio.com/${component}/${data}.json` 
    }   else { 
        link = `https://segurovehiculartrack-default-rtdb.firebaseio.com/${data}.json`
    }
    axios.get(link)
    .then(function (response) {
        return(response.data)
        //necesito usar redux o usecontext para poder pasar la informacion 
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        
    }); 
}

export default sendFormHome
