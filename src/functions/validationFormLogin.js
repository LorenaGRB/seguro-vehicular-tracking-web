
    const validationFormLogin= (dataV) => {
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;   
      const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g;
      const nameRegex = /^[a-zA-Z ]*$/g

      let isValid = true;
      let valEmail = false;
      let valPassword = false;
      let valName = false;

      if(dataV.newUser){
        if(nameRegex.test(dataV.name) && dataV.name !=''){
          valName = true;
        }else {
            valName = false; 
            isValid = false;
        }
      }else{
        valName = true;
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
