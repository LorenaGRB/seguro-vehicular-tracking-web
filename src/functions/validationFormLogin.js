
const validationFormLogin= (dataV) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;   
    const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g;
    const nameRegex = /^[a-zA-Z ]*$/g;
    const phoneRegex=/^[0-9]{9}$/g;  

    let isValid = true;
    let valEmail = false;
    let valPassword = false;
    let valName = false;
    let valPhone = false;
    let valDniImage = false;
    let valDniImageId = false;

    if(dataV.newUser){

        if(nameRegex.test(dataV.name) && dataV.name !==''){
            valName = true;
        }else {
            valName = false; 
            isValid = false;
        }

        if(phoneRegex.test(dataV.phone) && dataV.phone !==''){
            valPhone = true;
        }else {
            valPhone = false; 
            isValid = false;
        }

        if(dataV.dniImage){
            valDniImage=true;
        }else{
            valDniImage = false;
            isValid = false;
        }

        if(dataV.dniImageId){
            valDniImageId = true;
        }else{
            valDniImageId = false;
            isValid = false;
        }

    }else{
    valName = true;
    valPhone = true;
    valDniImageId = true;
    valDniImage = true;
    }

    if(emailRegex.test(dataV.email)){
        valEmail= true;
    } else {
        valEmail = false;
        isValid = false;
    }

    if(passwordRegex.test(dataV.password)){
        valPassword = true;
    } else {
        valPassword = false;
        isValid = false;
    }

    return (
        { 
            isValid: isValid,
            valEmail: valEmail,
            valPassword: valPassword,
            valName: valName,
            valPhone :valPhone,
            valDniImageId : valDniImageId,
            valDniImage:valDniImage
        }
    ) 
}




export default validationFormLogin
