

  import axios from 'axios'

function sendFormHome(namePostReq) {
    console.log(namePostReq.data.name)
    axios.get(`https://segurovehiculartrack-default-rtdb.firebaseio.com/formHome/${namePostReq.data.name}.json`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        // always executed
    });  
    return (
        console.log('get')
    )
}

export default sendFormHome
