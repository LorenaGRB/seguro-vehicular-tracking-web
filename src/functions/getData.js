import axios from 'axios'

 function getData(component,Data) {
    var link = '';
    if(component){ 
        link = `https://segurovehiculartrack-default-rtdb.firebaseio.com/${component}/${Data.data.name}.json` 
    }   else { 
        link = `https://segurovehiculartrack-default-rtdb.firebaseio.com/${Data.data.name}.json`
    }
    axios.get(link)
    .then(function (response) {
        return(console.log(response.data))
        //necesito usar redux o usecontext para poder pasar la informacion 
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        
    }); 
}

export default  getData
