
const validationFormLogin= (dataV) => {
    
    const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g;
    const nameRegex = /^[a-zA-Z ]*$/g;
    const phoneRegex=/^[0-9]{9}$/g;  
    const plateRegex=/^[0-9a-zA-Z]{6}$/g;

    let isValid = true;
    let valEmail = false;
    let valPassword = false;
    let valName = false;
    let valPhone = false;
    let valPlate = false;
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

        if(plateRegex.test(dataV.plate) && dataV.plate !==''){
            valPlate = true;
        } else {
            valPlate = false;
            isValid = false;
        }

        if(dataV.valDniImage !==''){
            valDniImage=true;
        }else{
            valDniImage = false;
            isValid = false;
        }
        if(dataV.valDniImageId !==''){
            valDniImageId = true;
        }else{
            valDniImageId = false;
            isValid = false;
        }

    }else{
    valName = true;
    valPhone = true;
    valPlate = true;
    valDniImageId = true;
    }

    if(dataV.email !==''){
        valEmail = true;
    }else {
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
            valPlate :valPlate,
            valDniImageId : valDniImageId,
            valDniImage:valDniImage
        }
    ) 
}




export default validationFormLogin
