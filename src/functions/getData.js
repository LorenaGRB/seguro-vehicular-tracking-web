import axios from 'axios'

function getData(component,Data) {
    var link = `https://segurovehiculartrack-default-rtdb.firebaseio.com/${component}/${Data.data.name}.json` 
    axios.get(link)
    .then(function (response) {
        localStorage.setItem(`${component}-data-get`, JSON.stringify(response));
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        
    }); 
}

export default  getData
