
    const validationFormLogin= (dataV) => {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;   
      const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g;
      const nameRegex = /^[a-zA-Z ]*$/g;
      const phoneRegex=/^[0-9]{9}$/g;  
      const plateRegex=/^[0-9a-zA-Z]{6}$/g;

      let isValid = true;
      let valEmail = false;
      let valPassword = false;
      let valName = false;
      let valPhone = true;
      let valPlate = true;

      if(dataV.newUser){

        if(nameRegex.test(dataV.name) && dataV.name !=''){
          valName = true;
        }else {
            valName = false; 
            isValid = false;
        }

        if(phoneRegex.test(dataV.phone)){
          valPhone = true;
        }else {
            valPhone = false; 
            isValid = false;
        }

        if(plateRegex.test(dataV.plate)){
            valPlate = true;
        } else {
            valPlate = false;
            isValid = false;
        }

      }else{
        valName = true;
        valPhone = true;
        valPlate = true;
      }

      if(emailRegex.test(dataV.email)){
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
              valName: valName
          }
      ) 
  }


  

export default validationFormLogin
